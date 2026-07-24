const prazanNiz = []

console.log(prazanNiz)

console.log(prazanNiz.length)

const temp = [4, 1, 9, 15, 17, 27, 30, 33, 26, 18, 14, 8,]

console.log(temp)
console.table(temp)

console.log(temp[0])

console.log(temp[temp.length - 1])

console.log(temp[5])

// temp = []

temp[5] = 28
console.table(temp)

temp.length = 10
console.table(temp)

temp.length = temp.length + 1
console.log(temp)
console.log(temp[temp.length - 1])
temp[20] = 77
console.log(temp)

const mjesta = [
    'Osijek',
    'Zagreb',
    'Split',
    'Zadar',
    'Dubrovnik',
    'Šibenik'
]

console.table(mjesta)

const grad = document.getElementById('grad')

grad.innerHTML = mjesta[2]

grad.addEventListener('click', () => {
    grad.innerHTML = mjesta[0]
})

const ptp = [
    'Edunova',
    18,
    18.99,
    18n,
    true,
    [],
    undefined,
    null,
    { ime: 'Pero' },
    () => { },
    Symbol('id')
]

console.log(ptp)
console.log(ptp[8])
console.log(ptp[8].ime)
console.log(ptp[8]['ime'])

const osobe = [
    {
        ime: 'Svebor',
        prezime: 'Kovačić',
        godine: 48
    },
    {
        ime: 'Dario',
        prezime: 'Kovačić',
        godine: 16
    },
    {
        ime: 'Lori',
        prezime: 'Avdaković',
        godine: 6
    }
]

console.table(osobe)

const suma = osobe[0].godine + osobe[1].godine + osobe[2].godine + (osobe[3]?.godine ?? 0)

console.log(suma)

const niz = [10, 20, 30]
console.log(niz)

const [n1, n2] = niz

console.log(n1, n2)

niz.length = 0

const [x1 = 1, x2 = 2] = niz

console.log(x1, x2)

const brojevi = [1, 2, 3]

const nijeKopija = brojevi

nijeKopija[0] = 7

console.log(brojevi)

const pravaKopija = [...brojevi]

pravaKopija[0] = 9

console.log(brojevi, pravaKopija)

const[t1, ...t2] = brojevi

console.log(t1, t2)

const temp1 = ['A', 'B', 'C']
const temp2 = ['D', 'E']

const spojeno = [...temp1, ...temp2]

console.log(spojeno)


const tablica = [
    [1, 2, 3], // 1. red, index 0
    [4, 5, 6], // 2. red, index 1
    [7, 8, 9]  // 3. red, index 2
]

console.log(tablica[1][2]) 

