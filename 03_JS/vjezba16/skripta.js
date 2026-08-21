
// Generator funkcije su posebna vrsta funkcije koje se mogu zaustaviti i nastaviti

// * označava generator

function* primjerGenerator(){
    console.log('Početak rada generator')
    yield true // 1. pauza - vraćam boolean true
    yield 2.7 // 2. pauza - vraćam broj
    yield {ime: 'Pero', godine: 27} // 3. pauza - vraćam objekt
    return 'Gotov'
}


// ovdje se funkcija ne izvršava
const generator = primjerGenerator() // konzola je prazna

// dolazak generatora do 1. pauze
console.log(generator.next())
console.log(generator.next().value)
console.log(generator.next().value.ime)
console.log(generator.next())

const g2 = primjerGenerator()

let g;
do{
    g = g2.next()
    console.log(g.value)
}while(!g.done)



function* sljedeciID(){
    let id = 1
    while(true){
        yield `ID_${id++}`
    }
}
const id = sljedeciID()
console.log(id.next().value)
console.log(id.next().value)

console.log('Nešto drugo radim')

for(let i=0; i<10; i++){
    console.log(id.next().value)
}

function* razgovor(){
    let odgovor
    while(true){
        odgovor = yield 'Kako se zoveš'
        console.log(`Generator kaže: Drago mi je, ${odgovor}`)
    }
}

const chat = razgovor()

// pokrenuti generator
console.log(chat.next().value)
console.log(chat.next('Marko').value)
console.log(chat.next('Marija').value)