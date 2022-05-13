let btn = document.getElementById('btn');
let res = document.getElementById('res');
let hidden = document.getElementById('hidden');

btn.addEventListener('click', desconto, false);

function desconto(){
    let produto = window.prompt('Qual o produto a ser comprado?');
    let valor = Number(prompt('Qual o valor?'));
    let dez = (valor/10).toFixed(2);
    let final = Number(valor - dez).toFixed(2);

    hidden.style.visibility = "hidden"
    
    res.innerHTML = `
    <h2>Ganhou desconto de 10% para ${produto}</h2>
    <p>O preço original era R$ ${valor}.</p>
    <p>Você acaba de ganhar R$ ${dez} de desconto!!</p>
    <p>No fim, O produto ${produto} sai a <strong>R$ ${valor - dez}</strong> </p>
    <p><strong>Aproveite a promoção por tempo limitado!</strong></p>
    `
}