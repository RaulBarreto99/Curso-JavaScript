//arrow function
let calc = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`);
}

console.log(calc(1, 2, "*"));

//eventos
window.addEventListener('focus', event => {
    console.log('focus');
})

document.addEventListener('click', event => {
    console.log('click')
})

//datas
let agora = new Date();
console.log(agora.toLocaleDateString('pt-br'))

//arrays
let carros = ["palio 98", "toro", "marea turbo", 10, true, new Date(), function(){}];

console.log(carros)
console.log('Quantdade de elementos:', carros.length)
console.log('Elemento especifco:', carros[2])

carros.forEach(function(value, index){
    console.log(index, value)
})


//classe antiga
let celular = function(){

    this.cor = "Prata";

    this.ligar = function(){
        console.log("uma lgação")
        return "ligando..."
    }

}

let objeto = new celular();

console.log(objeto.ligar())

//classa nova e atualizada
class celular2 {

    constructor(){
        this.cor = "preto"
    }

    ligar(){

        console.log("uma ligaçao....");
        return "ligando dnv...."
    }
}

let objeto2 = new celular2();

console.log(objeto2.cor)
console.log(objeto2.ligar())