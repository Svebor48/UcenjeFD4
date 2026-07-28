

/* =================================================
   ZADATAK 1 — Prvi i zadnji element
   - niz se gradi od A i B (plus dva fiksna elementa radi smisla)
   Ulaz primjer: [A, 20, 30, B]
   Izlaz: Prvi: A, Zadnji: B
================================================= */


document.getElementById('zad01').addEventListener('click', () => {
   console.log("ZADATAK 1 — Prvi i zadnji element")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   const ac = !a ? 'Prazno' : a

   const niz = [ac, 20, 30, !b ? 'Prazno' : b]
   console.log(niz)
   console.log(`Prvi: ${niz[0]}, Zadnji: ${niz[niz.length - 1]}`)
})


/* =================================================
   ZADATAK 2 — Siguran pristup elementu
   U danom nizu [1,2,3,4,5,6,7]
   - Ako je A broj postavi vrijednost B na taj index
   - Ako je A string u niz dodaj novi element i postavi B na taj index
================================================= */

document.getElementById('zad02').addEventListener('click', () => {
   console.log("ZADATAK 2 — Siguran pristup elementu");

   const a = document.getElementById('inA').value;
   const b = document.getElementById('inB').value;

   const niz = [1, 2, 3, 4, 5, 6, 7];

   if (a !== '' && !isNaN(Number(a))) {
      const indeks = Number(a);
      niz[indeks] = b; 
   } else {
      niz.push(b);
   }
   console.log("Konačni niz:", niz);
});



/* =================================================
   ZADATAK 3 — Zamjena prva dva elementa
   Unesi podatke A i B u niz [A, B, 3]
   - ispiši niz
   - zamijeni prva dva elemente
   - ispiši niz
================================================= */
console.log("ZADATAK 3 — Zamjena prva dva elementa")




/* =================================================
   ZADATAK 4 — Dodavanje elementa prema duljini
   - niz: [A, B]
   - ako je A string i duljina(A) < 3 → dodaj "X" na kraj
     inače → dodaj "Y" na početak
================================================= */
console.log("ZADATAK 4 — Dodavanje elementa prema duljini")



/* =================================================
   ZADATAK 5 — Provjera tipa prvog elementa
   - ako je A broj 7 na prvi elementi niza podatvi true, inače 0
   - ako je B tekst Osijek na drugi element postavi B, inače 2,5
   - koristeći elemente niza ispiši kojeg su tipa
================================================= */

document.getElementById('zad05').addEventListener('click', () => {
   console.log("ZADATAK 5 — Provjera tipa elemenata")

   //  const a = document.getElementById('inA').value
   //  const b = document.getElementById('inB').value

   // const PE = a === '7' ? true : 0
   // const DE = b === 'Osijek' ? 'B' : 2.5

   // const niz = [
   //    a === '7' ? true : 0, 
   //    b === 'Osijek' ? 'B' : 2.5
   // ]

   console.log([
      document.getElementById('inA').value === '7' ? true : 0,
      document.getElementById('inB').value === 'Osijek' ? 'B' : 2.5
   ])



})

/* =================================================
   ZADATAK 6 — Ukloni zadnji element 
  Vrijednosti A i B se unose u niz [A, B, 'KRAJ']
================================================= */
console.log("ZADATAK 6 — Ukloni zadnji element")


/* =================================================
   ZADATAK 7 — Spoji dva niza
   - niz1: [A, 2]
   - niz2: [B, 4]
   - spajanje spreadom
================================================= */
console.log("ZADATAK 7 — Spoji dva niza")


/* =================================================
   ZADATAK 8 — Provjera rupe u nizu
   - napravimo niz sa "rupom" na indeksu 1:
     niz[0]=A, niz[2]=B
   - provjerimo indeks 1
================================================= */
console.log("ZADATAK 8 — Provjera rupe u nizu")


/* =================================================
   ZADATAK 9 — Razdvajanje prvog i ostatka
   - niz: [A, B, 7, 6]
   - destructuring [prvi, ...ostatak]
================================================= */
console.log("ZADATAK 9 — Razdvajanje prvog i ostatka")


/* =================================================
   ZADATAK 10 — prema duljini niza
   - duljinu određujemo prema A i B:
     Ako je A prazan string ili B prazan string → niz = []
     Inače ako A === B → niz = [A]
     Inače ako je B broj i B === 2 → niz = [A, B]
     Inače → niz = [A, B, "x"]
================================================= */
console.log("ZADATAK 10 — prema duljini niza")

