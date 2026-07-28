// ponavljanje (iteracija), petlje (loops)

// u konzoli ispisati Edunova 10 puta jedno ispod drugog

// klasična for petlja

console.log('=====================')

for (let i = 0; i < 10; i++) {
    console.log('Edunova')
}

console.log('=====================')

for (let i = 0; i < 10; i++) {
    console.log(`i=${i + 1}`)
}

console.log('=====================')

let suma = 0

for (let i = 0; i < 100; i++) {
    suma += i + 1
    // debugger
}

console.log(suma)

console.log('=====================')

// nekoliko primjera šetanja s petljom
// od većeg prema manjem
for (let i = 10; i > 0; i--) {
    console.log(i)
}

console.log('=====================')

// uvećavam za 2

for (let i = 7; i < 20; i += 2) {
    console.log(i)
}

console.log('=====================')

// simuliram unos od korisnika
const pocetak = 7
const kraj = 20
const uvecanje = 2

for (let i = pocetak; i < kraj; i += uvecanje) {
    console.log(i)
}

for (let i = kraj; i < pocetak; i++) {
    console.log('Ovo se ne ispisuje jer nije ušao u petlju')
}

console.log('=====================')
// ispiši parne brojeve od 1 do 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}
suma = 0
// zbroji sve neparne brojeve od 7 do 77
for (let i = 7; i <= 77; i++) {
    if (i % 2 === 1) {
        suma += i
    }
}

console.log(suma)

// prim broj, prosti broj, prime number

let prim = true 
const broj = 7300000

for(let i=2;i<broj;i++){
    if(broj % i ===0){
        prim=false 
        break
    }else{
        if(i % 10000 === 0){
            console.log(i)
        }
    }
}

console.log(prim ? 'PRIM' : 'NIJE PRIM')

console.log('=====================')
// petlju možemo preskočiti ( nastaviti ) i nasilno prekinuti
for(let i=0;i<10;i++){
    if(i === 3){
        continue 
    }
    if(i === 7){
        break 
    }
    console.log(i)
}

// ugnježđivanje petlji
const x = 10
document.write('<table>')
for(let i=1;i<=x;i++){
    document.write('<tr>')
    for(let j=1;j<=x;j++){
        document.write(`<td>${i*j}</td>`)
    }
    document.write('</tr>')
}
document.write('</table>')

const niz = ['Marija', 'Zvonko', 'Ana', 'Miro', 'Tena', 'Ivo']

for(let i=0; i<niz.length;i++){
    console.log(niz[i])
}


console.log('=====================')
for(let i=niz.length-1; i>0;i--){
    console.log(niz[i])
}

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
suma=0
for(let i=0;i<osobe.length;i++){
    suma+=osobe[i]?.godine ?? 0
}

console.log(suma)

suma=0
for(const o of osobe){
    suma += o?.godine ?? 0
}

console.log(suma)

// string je niz znakova

const ime='Nina'

for(const z of ime){
    console.log(z,z.charCodeAt(0))
    document.write(`&#${z.charCodeAt(0)};`)
}

// beskonačna petlja
let brojac = 0 
document.write('<hr><h1>')
for(;;){
    document.write(`&amp;#${++brojac}; &#${++brojac};<br>`)
    if(brojac>65535){
        break
    }
}
document.write('</h1>')