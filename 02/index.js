//declarar variável
let btn = document.getElementById('btn');


// evento (chamar função)
btn.addEventListener('click', bienvenido, false);


//função
function bienvenido(){
    let name = prompt('Qual o teu nome?');
    let age = Number(prompt('Qual a tua idade?'));

    let res = window.alert(`Acabei de conhecer ${name}, que tem ${age} anos de vida!`)
}