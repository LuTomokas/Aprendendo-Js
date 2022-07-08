//challenge 1
//retornar a soma de 2 números

function somaDois(n1, n2){
    return n1 + n2
};

console.log(somaDois(-1, -3));

//challenge 2
//função p/ converter minutos em segundos
//a função deve receber um número inteiro
//

function converterMinutos(minutos){
    if (Number.isInteger(minutos))
    return minutos * 60
};

console.log(converterMinutos(5));

//challenge 3
//(b*h)/2 área triangulo
//função área de triângulo

function areaTriangulo(b, h){
    return (b*h)/2
};

console.log("a área do triangulo é " + areaTriangulo(8, 9));

//challenge 4
//função q recebe idade em anos e retorna em dias 

function idadeEmDias (a){
    if (Number.isInteger(a))
    return a * 365
}

console.log("A idade em dias é " + idadeEmDias(22))

//Challenge 5
//função que recebe um número e devolve ao cubo (ou nao)

function numeroAoCubo (n, e){
    if (Number.isInteger(n, e))
    return Math.pow(n, e)
};

console.log("O numero ao cubo é " + numeroAoCubo(10, 3));

//Challenge 6
//Jogo de basquete
//cesta de 2 pontos e cesta de 3 pontos
//função que recebe numero de cesta que valeram 2 pontos e numero de cesta que valeram 3
//calcular quantos pontos fizeram

function basquete(cestaDois, cestaTres){
    let pontos1 = cestaDois * 2
    let pontos2 = cestaTres * 3
    let pontosTotais = pontos1 + pontos2
    return pontosTotais
}

console.log("O time fez " + basquete(2, 3) + " pontos");

//Challenge 7, a mesma da 6 só que em 1 linha

function basquete2(cesta1, cesta2){
    return (cesta1*2) + (cesta2*3)
};
console.log("O time fez " + basquete2(2, 3) + " pontos");

//Challenge 8
//Receber 2 numeros, se a soma deles for maior que 100, retorna true, se nao retorna false

function maiorQueCem(n1, n2){
    if (n1 + n2 > 100) 
        return true
    return false
}

console.log("é maior que 100? " + maiorQueCem(80, 30));

//Challenge 9
//BitWise
//binario:
//let x = 11
//console.log(x.toString(2)); o (2) representa a base binária
console.log("ex bitwise-----------------------------")

function bitwiseAND (n1, n2){

    //Convertendo p/ string 
    n1 = n1.toString(2);
    n2 = n2.toString(2);

    //Verificando tamanho string
    let menor = n1 //assumindo o n1 como menor
    let maior = n2 //assumindo o n2 como maior

    if (n1.length != n2.length){
            if (n1.length > n2.length){
                menor = n2            //porem, se n1 for maior, o menor é o n2
                maior = n1            //e o maior é o n1
            };
        //Loop p/ igualar tamanhos SE for diferente
        for(let i = menor.length; i < maior.length; i++){ //for(inicia no menor, para no maior, i++)
            menor = "0" + menor
        }
    };

    //Loop p/ fazer o bitwiseAND
    let resultado = "";
    for (let j = 0; j < menor.length; j++){
        if (menor.charAt(j) == "1" && maior.charAt(j) == "1"){
            resultado = resultado + "1"
        }
        else {
            resultado = resultado + "0"
        }
    };

    return resultado;

};

console.log(bitwiseAND(2, 2));

