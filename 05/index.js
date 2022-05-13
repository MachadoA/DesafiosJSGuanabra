let btn = document.getElementById('btn');
let res = document.getElementById('res');

// evento
btn.addEventListener('click', converter, false);

//função
function converter() {
    let metros = Number(prompt('Digite uma distância em metros(m).'));
    let km = metros/ 1000;
    let hm = metros/100;
    let dam= metros/10
    let dm = metros *10
    let cm = metros * 100;
    let mm = metros * 1000;

    res.innerHTML = `
    <h2>A distância de ${metros} metros corresponde a:</h2>
    <p>${km} quilômetros (Km)</p>
    <p>${hm} hectômetros (Hm)</p>
    <p>${dam} decâmetros (Dam)</p>
    <p>${dm} decímetros (dm)</p>
    <p>${cm} centímetros (cm)</p>
    <p>${mm} milímetros (mm) </p>
    `
}
