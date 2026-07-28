// while petlja
// while radi s boolean tipom podatka
// sve dok je true (izraz ili varijabla) ostaje se u petlji

// beskonačna petlja
while(true){
    console.log('Edunova')
    break
}

// continue i break rade jednako kao u for

let brojac = 0

console.time('while petlja')
let suma = 0
while(brojac++ < 100){
   // console.log(brojac) // 1,2,3, ... 100
    suma += brojac
}

console.timeEnd('while petlja')
console.log(suma)


const brojUnos = '1262' // simuliram da je unio korisnik =
// zbroji sve znamenke broja

console.time('ZB1')

suma = 0

for(let i=0; i<brojUnos.length;i++){
    suma += Number(brojUnos[i])
}

console.timeEnd('ZB1')
console.log(suma)

console.time('ZB2')

let broj = Number(brojUnos)

suma = 0

while(broj>0){
    suma += broj % 10  // 1262 % 10 = 2 | 126 % 10 = 6 | 12 % 10 = 2 | 1 % 10 = 1
    broj = broj - (broj % 10)  // 1262 - 2 = 1260 | 126 - 6 = 120 | 12 - 2 = 10 | 1 - 1 = 0
    broj /= 10   // 1260 / 10 = 126 | 120 / 10 = 12 | 10 / 10 = 1 | 0 / 10 = 0
}

console.timeEnd('ZB2')
console.log(suma)

// 1262 / 10 = 126 cjelobrojno, 126 * 10 = 1260, 1262 - 1260 = 2

// 126 / 10 = 12 cjelobrojno, 12 * 10 = 120, 126 - 120 = 6

// 12 / 10 = 1 cjelobrojno, 1 * 10 = 10, 12 - 10 = 2 

// 1 / 10 = 0 cjelobrojno, 0 * 10 = 0, 1 - 0 = 1

const x = 5

for(let i=0; i>x;i++){
    console.log('Ušao u petlju')
}

const podaciAPI = [
    
    {
        ime: 'Pero'
    },
    {
        ime: 'Marko'
    },
    {
        ime: 'Marija'
    }
    
]

while(podaciAPI.length>0){
    console.log('Ušao u petlju', podaciAPI.pop()?.ime)
}