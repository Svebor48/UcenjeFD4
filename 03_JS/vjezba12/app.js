

const zadaci = {
  z1: (a, b) => {
    console.log('Zadatak 1');
    // početak 1
    // 1. Ispiši apsolutnu vrijednost razlike brojeva A i B.

    if (!a || !b) {
      rezultat.innerHTML = 'Obavezan unos A i B'
      return
    }

    const BrojA = Number(a)
    const BrojB = Number(b)

    if (!BrojA || !BrojB) {
      rezultat.innerHTML = 'A ili B nije broj'
      return
    }

    rezultat.innerHTML = Math.abs(BrojA - BrojB)

    // let razlika = BrojA - BrojB

    // console.log(razlika)

    // if(razlika < 0){
    //   razlika = razlika * -1
    // }

    // rezultat.innerHTML = razlika

    // kraj 1
  },

  z2: (a, b) => {
    console.log('Zadatak 2');
    // početak 2
    // 2. Ispiši veći broj od dva unesena cijela broja A i B.
    rezultat.innerHTML = ''

    // provjeri da li su vrijednosti unesene

    if (!a.trim()) {
      rezultat.innerHTML = 'Obavezan unos A'
      return
    }

    if (!b.trim()) {
      rezultat.innerHTML = 'Obavezan unos B'
      return
    }

    // provjeri da li su brojevi

    const brojA = Number(a)
    const brojB = Number(b)

    if (!brojA) {
      rezultat.innerHTML = 'A nije broj'
      return
    }

    if (!brojB) {
      rezultat.innerHTML = 'B nije broj'
      return
    }

    // ispiši veći

    if (brojA === brojB) {
      rezultat.innerHTML = 'Jednaki su'
    } else if (brojA > brojB) {
      rezultat.innerHTML = brojA
    } else {
      rezultat.innerHTML = brojB
    }



    // kraj 2
  },

  z3: (a, b) => {
    console.log('Zadatak 3');
    // početak 3 
    // 3. U rezultatu napravi onoliko div elemenata koliko je uneseno u polje A te svaki drugi div ima boju pozadine definiranu u polju B.

    if (!a) {
      rezultat.innerHTML = 'Nije unesena vrijednost A'
      return
    }

    if (!b) {
      rezultat.innerHTML = 'Nije unesena vrijednost B'
      return
    }

    const brojDivova = Number(a)

    if (!brojDivova) {
      rezultat.innerHTML = ' A nije broj'
      return
    }

    if (brojDivova < 1) {
      rezultat.innerHTML = 'broj divova ne može biti manji od 1'
      return
    }

    if (brojDivova > 100) {
      rezultat.innerHTML = 'prevelik broj'
      return
    }

    let divovi = ''

    for (let i = 0; i < brojDivova; i++) {


      if (i % 2 === 0) {
        divovi += `
        <div style="background-color: ${b}">
        &nbsp;
        </div>
        `
      } else {
        divovi += '<div>&nbsp;</div>'
      }
    }

    rezultat.innerHTML = divovi

    // kraj 3
  },


  z4: (a, b) => {
    console.log('Zadatak 4');
    // početak 4
    // 4. Ako ostane polje A i B prazno u rezultat upišite dva emojia po vlastitom izboru

    if (!a && !b) {
      rezultat.innerHTML = '🤣😀'
    }

    // kraj 4
  },
  z5: (a, b) => {
    console.log('Zadatak 5');
    // početak 5
    // 5. Osmislite zadatak sami i realizirajte ga

    const ime = a.trim();

    if (!ime) {
      rezultat.innerHTML = 'Hello World';
    } else {
      rezultat.innerHTML = `Hello ${ime}`;
    }

    // kraj 5
  }
  // ovdje dodajemo nove zadatke
}


const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;
  if (!(('z' + zadatak) in zadaci)) {
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }
  // poziv funkcije u objektu
  zadaci['z' + zadatak](a, b);
});
