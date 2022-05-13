let btn = document.getElementById('btn');
let res = document.getElementById('res');

btn.addEventListener('click', reajuste, false);

function reajuste() {
    let nome = prompt('Qual o nome do funcionário?');
    let salario = Number(prompt(`Qual o salário de ${nome} ?`));
    let porcentagem = Number(prompt(`O salário de ${nome} será reajustado em qual porcentagem?`));
    let aumento = Number((salario*porcentagem)/100).toFixed(2);
    let total = (Number(salario) + Number(aumento)).toFixed(2);
    

    res.innerHTML = `
    <h2>${nome} recebeu um aumento salarial!</h2>
    <p>O salário era de R$ ${salario}.</p>
    <p>Com ${porcentagem}%, recebeu um aumento de R${aumento}.</p>
    <p>Desta maneira, ${nome} passa a ganhar R$ ${total} por mês.</p>
    `
}