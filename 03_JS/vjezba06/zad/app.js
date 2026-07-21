const rez = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click',()=>{
    // početak funkcije koja se izvodi na klik Izvedi
    rez.innerHTML=''
    const aString = document.getElementById('aInput').value

    const zad = Number(document.getElementById('zadatak').value)

    switch(zad){
        case 1:
            // počinje 1. zadatak
            if(!aString.trim()){  //trim() čisti razmake prije i poslije teksta
                rez.innerHTML='Obavezan unos'
                rez.style.color='red'
                return //return prekida if,switch,function
            }

            switch(aString.trim().toLowerCase()){
                case 'start':
                    rez.innerHTML='Pokretanje programa'
                    rez.style.color='green'
                    break
                case 'stop':
                    rez.innerHTML='<span style="color: #f0f">Zaustavljanje programa</span>'
                    break 
                case 'pauza':
                    rez.innerHTML = `
                                        <span class="pauza">
                                            Pauziranje programa
                                        </span>
                    `
                    break
                default:
                    rez.innerHTML='Nije komanda'
                    rez.style.color='red'
            }
            
            // završava 1. zadatak
            break
        case 2:
            // počinje 2. zadatak
            if(!aString.trim()){
                rez.innerHTML='Obavezan unos'
                rez.style.color='red'
                return
            }

            if(aString.trim().lenght>1){
                rez.innerHTML='Obavezno jedno slovo'
                rez.style.color='red'
                return 
            }

            const b = Number(aString.trim())

            if(b || b===0){ // ako je b truly (1,2,3,4,5,6,7,8,9) ili je 0
                rez.innerHTML='Ne broj, slovo'
                rez.style.color='red'
                return
            }

            switch(aString.trim().toLowerCase()){
                case 'a':
                case 'b':
                case 'c':
                    rez.innerHTML='Položio'
                    rez.style.color='green'
                    break
                case 'd':
                case 'f':
                    rez.innerHTML='Nije položio'
                    rez.style.color='brown'
                    break
                default:
                    rez.innerHTML='Dozvoljeni unos A, B, C, D ili F'
                    rez.style.color='red'
            }


            // završava 2. zadatak
            break
    }

    // kraj funkcije koja se izvodi na klik Izvedi
})

// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pauza"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).

// 4. zadatak
// Za uneseno ime namirnice ispisi dali je voće ili meso ili nemozes odrediti
// npr. ulaz janjetina, svinjetina, teletina ispis Meso
// npr. ulaz jabuka, kruška, šljiva, jagoda ispis Voće
// npr. žablji kraci ispis Ne može se odrediti 