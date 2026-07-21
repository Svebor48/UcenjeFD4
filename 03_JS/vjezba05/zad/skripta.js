const rezultat = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click', () => {
    rezultat.innerHTML = ''

    // idem pokupiti vrijednosti koje je unio korisnik (String)
    const aString = document.getElementById('a').value
    const bString = document.getElementById('b').value
    const cString = document.getElementById('c').value
    const dString = document.getElementById('d').value

    const zadatak = document.getElementById('zadatak').value

    if (zadatak === '1') {
        // počinje 1. zadatak
        if (!aString) { //falsy, aString===''
            rezultat.innerHTML = 'Unesite vrijednost A'
            rezultat.style.color = 'red'
            return //prekida izvođenje click funkcije - short curcuiting
        }

        const a = Number(aString)

        if (!a) { // falsy, a je NaN
            rezultat.innerHTML = 'A nije broj'
            rezultat.style.color = 'red'
            return
        }

        // ovdje sam 100% siguran da mi je a broj

        if (!bString) {
            rezultat.innerHTML = 'Unesite vrijednost B'
            rezultat.style.color = 'red'
            return
        }

        const b = Number(bString)

        if (!b) {
            rezultat.innerHTML = 'B nije broj'
            rezultat.style.color = 'red'
            return
        }

        // ovdje sam 100% siguran da su a i b brojevi

        //rezultat.innerHTML = a > b ? a : b
        if (a === b) {
            rezultat.innerHTML = 'Jednaki su'
        } else if (a > b) {
            rezultat.innerHTML = a
        } else {
            rezultat.innerHTML = b
        }
        rezultat.style.color = 'green'

        // završava 1. zadatak
    }




})