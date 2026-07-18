const a = 7 //parseInt(prompt('Unesi prvi broj'))
const b = 3 //parseInt(prompt('Unesi drugi broj'))

let rez = a + b


// IZLAZ
console.log(a, '+', b, '=', rez)

console.log(`${a} + ${b} = ${rez}`) 

console.log(9 % 2)
console.log(8 % 2)

rez = rez + 2

console.log(rez)

rez += 2

console.log(rez)

let i = 0   

i = i + 1

i += 1

i++

console.log(i)

i = 0

console.log(i++)

console.log(++i)

i = 2
let j = 1
i = j++ - i
j += --i - ++j
console.log(i - j)

console.log('5' != 4)
console.log(5 != 5)
console.log('5' !== 5)

const uvjet = '5' !== '5'

console.log('uvjet', typeof uvjet, uvjet)

const godine = 18

console.log(godine > 18)
console.log(godine >= 18)

const punoljetan = godine >= 18

console.log(uvjet && punoljetan)

console.log(uvjet || punoljetan)

console.log(uvjet, !uvjet)

console.log('Pero ima ' + godine + ' godina')

console.log(`Pero ima ${godine} godina`)

const x = '7' , y = 5

console.log(x + y)

const niz = [1,2]

console.table(niz)

const noviNiz = [0, ...niz, 3]

console.table(noviNiz)

const osoba = {
    ime: 'Pero',
    prezime: 'Perić'
}

console.table(osoba)

const polaznik = {
    ...osoba,
    edukacija: 'FD'
}

console.table(polaznik)

const [prvi, drugi] = [1,2]

console.log(prvi, drugi)

const {prezime, ...meniBitno} = polaznik

console.table(meniBitno)

let sifra

console.log(sifra ?? 'Šifra nije postavljena')

console.log(sifra ?? 'Šifra nije postavljena')

const korisnik = {
    adresa: {
        grad: 'Osijek'
    }
}

console.log(korisnik.adresa.grad.toUpperCase())
 
console.log(korisnik.adresa.ulica?.toUpperCase() ?? 'Nije postavljeno') 


