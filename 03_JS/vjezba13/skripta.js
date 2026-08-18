// Try Catch je mehanizam osiguranja da nam program ne pukne na način 
// da nam omogući obradu greške ( iznimke)

// console.log('Početak')

// const i = 7

// const rezultat = i + varijabla

// console.log(rezultat)

// console.log('Kraj')


try{
    // ovdje se uvijek pokuša izvesti sve kako je navedeno
    // ovdje netko može baciti (throw) greške (iznimke)
    console.log('Početak')
    const i = 7
    const rezultat = i + varijabla
    console.log(rezultat)
    
}catch(e){
    // ovdje hvatam grešku (iznimku)
    console.log('Greška')
    console.log(e.name)
    console.log(e.message)
    console.error(e)
}

console.log('Kraj')


console.log('2. primjer - bolji')

const i = 7
let rezultat = 0
try{
    // ovo se uvijek izvodi
    rezultat = i + varijabla
} catch{
    // izvodi se u slučaju greške u try
    rezultat = i + 1   // +1 je sadržajni dio
} finally{
    // uvijek se izvodi
    console.log(rezultat)
}

console.log('Kraj primjer 2')

// bacanje greške
/**
 * @throws Ukoliko je broj manji od 0 baca grešku
 * @param {*} broj 
 * @returns 
 */
function korijen(broj){
    if(broj<0){
        throw new Error('Ne mogu izvaditi 2. korijen')
    }
    return Math.sqrt(broj)
}


try {
    console.log(korijen(9))
} catch (error) {
    console.log(error.message)
}


console.log('Nastavak')


// jedan zgodan primjer - loša sintaksa

function rekurzija(){
  let a = 1, b = 2, c = 3, d = 4, e = 5
  let s = 'neki dugi tekst da napunimo memoriju'
    brojac++
    rekurzija()
}

let brojac = 0

console.time('rekurzija')
try {
    rekurzija()
} catch (error) {
    console.log('Stog napunjen nakon broja poziva:', brojac)
}
console.timeEnd('rekurzija')
