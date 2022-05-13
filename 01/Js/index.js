/// declarações///

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

/// eventos + arrow function ///
btn1.addEventListener('click', a => window.alert(`Você clicou no 1º botão`), false);
btn2.addEventListener('click', b => window.alert(`Você clicou no 2º botão`), false);
btn3.addEventListener('click', c => window.alert(`Você clicou no 3º botão`), false);

