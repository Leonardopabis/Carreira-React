// function soma (a, b) {
//     return a + b
// }
// const soma = (a,b) => {
//     return a+b
// }

// console.log(soma(3, 6))

function exibir(resultado){
    console.log('O resultado é: '+ resultado)
}

function soma(a, b, callback) {
    let soma = a + b;
    callback(soma);
}

soma(3, 5, exibir);