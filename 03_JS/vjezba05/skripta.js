const uvjet = false

if(uvjet){
    console.log('uvjet je true')
}

if(uvjet)
    console.log('uvjet je true')
   // console.log('I OVO ŽELIM ISPISATI kada je uvjet true') 

if(uvjet){
    console.log('Dobro je')
}else{
    console.log('NIJE dobro')
}   

const ocjena = 3


if(ocjena===1){
    console.log('Nedovoljan')
}else if(ocjena===2){
    console.log('Dovoljan')
}else if(ocjena===3){
    console.log('Dobar')
}else if(ocjena===4){
    console.log('Vrlo dobar')
}else if(ocjena===5){
    console.log('Izvrstan')
}

else{
    console.log('Broj nije ocjena')
}

if(ocjena>=1 && ocjena<=5){
    console.log('Ocjena je valjana')
}

if(ocjena<1 || ocjena>5){
    console.log('Ocjena nije valjana')
}

if(!(ocjena<1 || ocjena>5)){
    console.log('Ocjena JE valjana na drugi način')
}

if(ocjena>=1 && ocjena<=5){
    console.log('Ocjena je valjana')
}else{
    console.log('Nije ocjena')
}

console.log(ocjena>=1 && ocjena<=5 ? 'Ocjena je valjana inline' : 'Nije ocjena inline')

const ime=''

if(!ime){ //if(ime===''){
    console.log('Ime nema vrijednost')
}else{
    console.log(ime)
}

const b = Number('aaaa')

console.log(b)

if(!b){
    console.log('Niste unijeli broj')
}

const x = 12

if(x){
    console.log('Punoljetan je')
}
