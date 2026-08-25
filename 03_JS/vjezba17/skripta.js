
// "stara funkcija"

function primjer(prvi, drugi){
    console.log(prvi, drugi)
}

primjer('Edunova','Osijek')

function dugiPoziv(){
    let i=0
    console.log(new Date())
    // setTimeout mi simulira dohvaćanje sadržaja s backenda (API)
    setTimeout(() => {
        // ovdje pišemo što će se napraviti nakon što itene vijeme
        console.log(++i, new Date())


        setTimeout(() => {
            console.log(++i, new Date())

            setTimeout(() => {
                console.log(++i, new Date())
            }, 1000);

        }, 2000);


    }, 5000); // 5000 ms = 5 s
}

dugiPoziv()

// async/await

async function cekaj(ms){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Završio za ${ms/1000} sekundi`)
        }, ms);
    })
}

async function izvedi(){
    let odgovor = await cekaj(5000)
    console.log(odgovor)

    for(let i = 0; i < 10; i++){
        console.log(await cekaj((i+1)*1000))
    }

}

// ovo ovdje je top-level module
izvedi() // ovdje mogu i ne moram navesti await


// IIFE (Immediately Invoked Function Expression)
;(async () => {   // ; označava da je prethodni izraz završio a stavljam je ovdje jer ne koristimo ;
    console.log('Hello IIFE')
    const url = 'https://dog.ceo/api/breeds/image/random'
    await fetch(url)
    .then(response => response.json())
    .then(json => {
        console.log(json.message)
        document.getElementById('slika').src = json.message
    })
    .catch(rejected => {
        alert('Imamo problema s učitanjem sadržaja, molimo pokušajte kasnije')
    })

})() // ove zadnje dvije () znače izvedi