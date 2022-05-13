// declarar variável
let btn = document.querySelector('#btn');

// evento (chamar)
btn.addEventListener('click', num, false);

//função
function num() {
    let n1 = Number(prompt('Escreve um númeo inteiro'));

    let antes = n1 - 1;
    let depois = n1 + 1;
    let res = window.alert(`O número digitado foi ${n1}.
    O antecessor é ${antes} e o sucessor, ${depois}`);

}