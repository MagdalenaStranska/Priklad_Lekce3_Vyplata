// Výplata jako stránka
// 1. Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a spočítá jeho hrubou mzdu za předpokladu, že pracuje 8 hodin denně 21 dní v měsíci. Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
// 2. Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. Opět dejte pozor na správnou konverzi.

// const hodinovaSazba = Number(prompt("Zadej svou hodinovou sazbu v Kč"))
// const hrubaMzda = Number(hodinovaSazba * 8 * 21)

// document.body.innerHTML += "<p>" + "Měsíční hrubá mzda: " + hrubaMzda + " Kč" + "</p>"


// const hodinovaSazba = Number(prompt("Zadej svou hodinovou sazbu v Kč"))
// const pocetHodin = Number(prompt("Zadej delku smeny v hodinach"))
// const pocetDnu = Number(prompt("Zadej pocet odpracovanych dnu"))
// const hrubaMzda = Number(hodinovaSazba*pocetHodin*pocetDnu)

// document.body.innerHTML += "<p>" + "Měsíční hrubá mzda: " + hrubaMzda + " Kč" + "</p>"


const hodinovaSazba = Number(prompt("Jaká je vaše hodinová sazba?"));
const pocetHodin = Number(prompt("Kolik hodin denně pracujete?"));
const pocetDni = Number(prompt("Kolik dní měsíčně pracujete?"));

document.body.innerHTML += "<p>Vaše vyplata činí " + (hodinovaSazba*pocetHodin*pocetDni) + " korun</p>";
