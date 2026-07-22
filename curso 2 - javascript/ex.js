// const array = [10, 20, 30, 40, 50];
// let desconto = array.map(valor => {
//     return valor * 0.9;
// })
// console.log(desconto)

// let idades = [12, 18, 25, 16, 30];
// let maiores = idades.filter(idade => {
//     return idade >= 18;
// })
// console.log(maiores)
let add = (b) => {
    return b * 10
}
console.log(add(2))

const pessoa = {
    nome: 'natália',
    idade: 20,
    profissao: 'estudante'
}

const {nome} = pessoa
console.log(nome)

const saudacao = ({nome}) => {
    console.log("Olá, ", nome)
} 

function saudacao1({ nome }){
    console.log('Oi', nome)
} 

saudacao(pessoa)
saudacao1(pessoa)

const frutas = ['maca', 'pera']
const [primeira, segunda] = frutas
console.log(primeira, " | ", segunda)

//const primeira = frutas[0]
//const segunda = frutas[1]