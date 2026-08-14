document.getElementById('loveForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (!name1 || !name2) return;

    // 1. Priprema spojenog imena (velika slova)
    const combinedNames = (name1 + name2).toUpperCase().replace(/\s+/g, '');

    // 2. Brojanje ponavljanja svakog slova
    const initialNumbers = [];
    for (let char of combinedNames) {
        let count = 0;
        for (let c of combinedNames) {
            if (c === char) count++;
        }
        initialNumbers.push(count);
    }

    // Polje za praćenje svih koraka radi prikaza
    const history = [initialNumbers];

    // 3. Pokretanje rekurzivne funkcije
    const finalNumbers = calculateLoveRecursive(initialNumbers, history);
    const finalResult = parseInt(finalNumbers.join(''), 10);

    // 4. Prikaz rezultata na ekranu
    displayResults(finalResult, history);
});

/**
 * Rekurzivna funkcija za zbrajanje krajeva niza
 */
function calculateLoveRecursive(numbers, history) {
    // Bazni uvjet rekurzije: kad ostanu 2 ili manje znamenki
    if (numbers.length <= 2) {
        return numbers;
    }

    const nextRow = [];
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        if (left === right) {
            // Ako je neparan broj elemenata, srednji ostaje isti
            nextRow.push(numbers[left]);
        } else {
            const sum = numbers[left] + numbers[right];

            // Ako je zbroj dvoznamenkasti (npr. 10), razbijamo ga na pojedinačne znamenke [1, 0]
            if (sum >= 10) {
                const digits = sum.toString().split('').map(Number);
                nextRow.push(...digits);
            } else {
                nextRow.push(sum);
            }
        }
        left++;
        right--;
    }

    // Spremanje trenutnog koraka u povijest
    history.push(nextRow);

    // Rekurzivni poziv
    return calculateLoveRecursive(nextRow, history);
}

/**
 * Prikazuje međukorake i konačni postotak
 */
function displayResults(result, history) {
    const resultContainer = document.getElementById('resultContainer');
    const finalPercentSpan = document.getElementById('finalPercent');
    const stepsDiv = document.getElementById('steps');

    finalPercentSpan.textContent = result;
    stepsDiv.innerHTML = '';

    // Ispis svakog reda rekurzije
    history.forEach(row => {
        const rowp = document.createElement('p');
        rowp.textContent = row.join(' ');
        stepsDiv.appendChild(rowp);
    });

    resultContainer.classList.remove('hidden');
}