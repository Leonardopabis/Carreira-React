const eu = {
    nome: "Leo"
}

eu["idade"] = 18;
eu.idade = 19
console.log(eu)

const fun = ( {nome, idade} ) => {
    console.log("Meu nome é", nome, "e tenho",idade)
}
fun(eu)

const voce = {
    nome: "voce",
    idade: "sua idade"
}

const array = [eu, voce]

for (let i = 0; i < array.length; i++) {
    fun(array[i])
}

const usuario = {
    nome: "edu",
    saudacao: function(){
        console.log("ola "+ this.nome);
    }
};

usuario.saudacao();