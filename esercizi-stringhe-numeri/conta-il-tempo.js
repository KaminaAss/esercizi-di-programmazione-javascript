/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
let time = 8625;
let coeff = 60;
let coeff2 = 3600;
let hours = Math.floor(time/coeff2);
let min = Math.floor((time-(hours*coeff2))/coeff);
let sec = Math.floor(time-(hours*coeff2)-(min*coeff));
console.log(`${hours} ore, ${min} minuti, ${sec} secondi`);
