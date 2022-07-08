//DEFININDO E PRINTANDO---------------------------------------------------------------------------------------------------------------------------------
console.log("DEFININDO E PRINTANDO----------------");
let idade = 22; //o let é usado para definir, usado em variaveis que serão mudadas
console.log(idade); //printa no console
let meuApelido = "bibi";
console.log(meuApelido);
meuApelido = "lulu" //tu pode mudar uma variável let sem defini-la novamente
console.log(meuApelido);
let altura = 160;
console.log(altura);
const meuNome = "luciana"; //const é usado para definir, usado em variáveis constantes
console.log(meuNome);

//TIPOS DE VALOR---------------------------------------------------------------------------------------------------------------------------
console.log("TIPOS DE VALOR--------------------");
//no console, você pode verificar o tipo da variável usando typeof
let nomeFruta = "banana"; //string literal
let precoFruta = 5; //number literal
let estaBarato = true; //boolean
let estaCaro = false;
let corDaFruta ; //Undefined, o valor da variável não foi estipulado
let frutaQueEuQuero = null; // Valor vazio, usado quando se espera um valor, no caso esperaria o cliente selecionar uma fruta

//TIPOS DE REFERÊNCIA-------------------------------------------------------------------------------------------------------------------
console.log("TIPOS DE REFERÊNCIA---------------");
//OBJETOS:
console.log("OBJETOS:");
let objetoExemplo = {
    //Key: value,
    //Key: value
};

let cachorro = {
    nome: "Chulli",  //Key: value
    idade: 8,
    apelido: "tutula",
    altura: 60 + "cm"
};

console.log(cachorro);

//ARRAYS: conjunto de dados que pode ser acessado por um índice (índice: posição exata onde se encontra a informação)
console.log("ARRAYS:");

let familia = [meuNome, "Flavio", "Mãe", cachorro.nome]; //referência variável e objeto
console.log(familia); //mostra todo o array
console.log(familia[2]); //mostra apenas o segundo item, ou seja, mãe, pois inicia no 0
console.log(familia.length); //mostra o tamanho do array

//FUNCTIONS: 
console.log("FUNCTIONS:");
// verbo + substantivo
// exemplo: resetaCor

let corSite = "azul";
console.log(corSite);

function resetaCor(){ //Definição da função, no caso vai resetar a cor do site
    corSite = ""; 
};
resetaCor(); //Chamando a função, para ela ser executada
console.log(corSite); //O valor do corSite agora é vazio

//PARÂMETROS NA FUNCTION:
//function minhaFunção(Parâmetro){}

let corSite2 = "amarelo";
console.log(corSite2);

function resetaCor2(cor){ //Parâmetro: nome do dado
    corSite2 = cor; //argumento: o que será feito com o parâmetro passado, neste exemplo, a função define que a cor do site é o parâmetro COR
};

resetaCor2("vermelho"); //O parâmetro pode ser mudado na chamada da função, neste exemplo o parâmetro foi mudado para vermelho, então a cor do site é o parâmetro VERMELHO
console.log(corSite2); 
resetaCor2("laranja"); // cor do site = laranja
console.log(corSite2);

//para usar mais de um parâmetro:

let corSite3 = "verde"

function resetaCorETonalidade(cor, tonalidade){ //dois parâmetros
    corSite3 = cor + " " + tonalidade; //o que sera feito com os dois parâmetros, no caso a corSite3 sera igual a cor e a tonalidade que será definida na chamada da função, o + apenas os coloca um do lado do outro, a string "vazia" é apenas um espaço
}
console.log(corSite3);
resetaCorETonalidade("marrom", "escuro"); //chamada da função definindo os novos parâmetros
console.log(corSite3);

//TIPOS DE FUNÇÃO 
// 1 - realiza uma tarefa, mas não devolve nada
function dizerNome (){ //declarando a função
    console.log("Luluzita");
} 
dizerNome(); //chamando a função

//2 - faz um cálculo ou operação e retorna algo

function multiplicarPorDois(valor){ //Parâmetro a ser mudado na chamada
    return valor * 2; //o que será retornado, no caso é algum valor multiplicado por dois
}

console.log(multiplicarPorDois(5));//O parâmetro é mudado para o valor desejado

let resultadoMultiplicarPorDois = multiplicarPorDois(6) //O retorno, ou seja, resultado do cálculo da função sera o valor da variavel
console.log(resultadoMultiplicarPorDois);

//OPERADORES--------------------------------------------------------------------------------------------------
console.log("OPERADORES----------------------------");

//Operadores aritiméticos(matemáticos)
//Operadores de atribuição
//Operadores de comparação
//Operadores lógicos
//Operadores bitwise

//OPERADORES ARITIMÉTICOS:
console.log("OPERADORES ARITIMÉTICOS:");
// + adição
// - subtração
// / divisão
// * multiplicação
// ** o número vezes ele mesmo, exponencial
// ++ incremento + 1
// -- decremento - 1

let salario = 100;
console.log(salario + salario);
console.log(++salario); //se colocar o ++ ou -- antes da variavel, o número pós cálculo só aparecerá na próxima linha

//OPERADORES DE ATRIBUIÇÃO:
console.log("OPERADORES DE ATRIBUIÇÃO:");
// = atribuição de valor
// += valor mais ele mesmo
// -= valor menos ele mesmo

let salario2 = 200; //atribuição
salario2 += salario2; //valor mais ele mesmo (200+200)
console.log(salario2);

//OPERADORES DE IGUALDADE
console.log("OPERADORES DE IGUALDADE:");

// === igualdade estrita, o valor e o tipo devem ser iguais (mais usado)

console.log(1 === 1); //retorna true
console.log("1" === 1); //retorna false, pois o "1" é string e o 1 é number

// == igualdade solta, o valor deve ser igual, ignorando o tipo

console.log("1" == 1); //retorna true, pois mesmo com o tipo diferente, o valor é igual

//OPERADOR TERNÁRIO
console.log('OPERADORES DE TERNÁRIO:');
// > maior que
// < menor que
// >= e <= maior ou igual que e menor ou igual que
//imagine a seguinte situação: se o cliente tiver 100 pontos, ele é prêmium, se não, é comum. Como fazer isso sem if e else
let pontos = 100;
let tipoDeCliente = pontos >= 100 ? "premium" : "comum";
// pontos > 100 ? ----> Compara, pontos é maior ou igual a 100?
// se sim "premium", se não "comum". o ":" separa o que deve acontecer se for true e o que deve acontecer se for false
console.log(tipoDeCliente)

//OPERADORES LÓGICOS: 
console.log("OPERADORES LÓGICOS:");

// and --> e --> && --> retorna TRUE se os dois operandos forem true
console.log("AND &&:")

console.log(true && true); //retorna true
console.log(false && true); //retorna false
//exemplo: o candidato só pode aplicar p/ uma vaga caso for maior de idade e tiver carteira de motorista
let maiorDeIdade = true;
let possuiCarteiraDeMotorista = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeMotorista;
console.log(podeAplicar); //vai retornar true, pois ao comparar as duas o js vê que as duas são true

// or --> ou --> || --> retorna TRUE se um dos operandos forem true, pelo menos um deve ser true, ele faz a primeira comparação, tudo que vem depois é ignorado (1 || 2 || 3, a partir do 2 ja seria ignorado)
console.log("OR ||:")

console.log(true || false); //retorna true
console.log(false || false); //retorna false
//exemplo: o candidato pode aplicar p/ uma vaga se tiver pelo menos um dos atributos
let maiorDeIdade2 = false;
let possuiCarteiraDeMotorista2 = false;
let podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeMotorista2;
console.log(podeAplicar2); //retorna false, pois não tem nenhum, retornaria true se um deles fosse true

// not --> não/negação --> ! --> faz uma negação/inverte o resultado
console.log("NOT !:");
//exemplo: o candidato pode aplicar p/ uma vaga se tiver pelo menos um dos atributos
let maiorDeIdade3 = false;
let possuiCarteiraDeMotorista3 = false;
let podeAplicar3 = maiorDeIdade3 || possuiCarteiraDeMotorista3;
let candidatoRecusado = !podeAplicar3; //o ! está negando o podeAplicar3, ou seja, o candidatoRecusado só sera true se o podeAplicar3 for false.
console.log("não pode aplicar", candidatoRecusado); //volta true, pois podeAplicar3 é false.
//e se !podeAplicar for false? 
let maiorDeIdade4 = true;
let possuiCarteiraDeMotorista4 = false;
let podeAplicar4 = maiorDeIdade4 || possuiCarteiraDeMotorista4;
let candidatoRecusado2 = !podeAplicar4;
console.log("pode aplicar", candidatoRecusado2); //candidatoRecusado2 é false pois podeAplicar4 é true.

//FALSY E TRUTHY:
console.log("FALSY E TRUTHY:");
//FALSY são todos os valores que são:
//undefined
//null
//0
//false
//"" (string vazia)
//NaN (not a number, valorez inválidos)

// TRUTHY: são todos os valores que não são falsy, independente do que seja.
//se no console tu fazer false || 1
//o console retornaria 1, o 1 é truthy

//Exemplo:
let corPersonalizada = "vermelho";
let corPadrao = "azul";
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil); //Exibe vermelho, pois corPersonalizada já está preenchido com vermelho, ou seja, é um valor TRUTHY. A comparação para quando acha um valor que é TRUTHY

//E se tiver um valor falsy?
let corPersonalizada2 = "";
let corPadrao2 = "azul";
let corPerfil2 = corPersonalizada2 || corPadrao2;
console.log(corPerfil2);//Exibe "azul", pois corPersonalizada2 é uma string vazia, ou seja, é um valor FALSY, dessa forma a comparação continuou até achar um valor TRUTHY, no caso "azul"

//PRIMEIRO EXERCÍCIO-----------------------------------------------------------
console.log("PRIMEIRO EXERCÍCIO------------------------------");

//Troque os valores das variaveis:
//a = vermelho
//b = azul

let a = "vermelho";
let b = "azul";
console.log(a);
console.log(b);

let c = a; // atribui "vermelho" ao c
a = b; // o valor de a foi mudado, porém "vermelho" foi atribuído ao c
b = c;
console.log(a);
console.log(b);

//SEGUNDO EXERCÍCIO--------------------------------------------------------------
console.log("SEGUNDO EXERCÍCIO-----------------------------------");

//Trocar os valores das variáveis sem criar uma terceira variavel para guardar valor
let x = 2;
let y = 15;
console.log(x);
console.log(y);

x = x + y //primeiro atribui-se o valor total à x, agora x é 17.
y = x - y //o total, menos y, será o novo valor de y (pois sera tudo menos o y)
x = x - y //agora y tem o valor de x-y, que é 2, então x - y é 15, ou seja, o antigo valor de y

console.log(x);
console.log(y);

//CONDICIONAIS------------------------------------------------------------------
console.log("CONDICIONAIS------------------------------------------------");

//IF/ELSE:
console.log("IF/ELSE:");

//if (condição){
//  código a ser executado
//}
//else if (outra condição){
//  código a ser executado
//}
//else {
// código a ser executado
//}

//Se a hora estiver entre 06:00 até 12:00 ---> Bom dia!
//Se a hora estiver entre 12:00 até 18:00 ---> Boa tarde!
//Caso contrário ---> Boa noite!

let hora = 20;
if (hora > 6 && hora < 12) {
    console.log("Bom dia");
}
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde");
}
else {
    console.log("Boa noite");
}

//SWITCH/CASE:
console.log("SWITCH/CASE:")

//é usado para selecionar um de varios blocos de código
//If there is a match, the associated block of code is executed.
//If there is no match, the default code block is executed.

//switch(variável){
//  case valor1davariavel:
//      código a ser executado
//      break;    
//  case valor2davariavel:
//      código a ser executado
//      break;
//  default:
//      código a ser executado caso o valor não for nenhum dos cases

let permissao; //comum, gerente e diretor
permissao = "comum";
switch (permissao) {
    case "comum":
        console.log("usuário comum");
    break;

    case "gerente":
        console.log("usuário gerente");
    break;

    case "diretor":
        console.log("usuário diretor");
    break;

    default:
        console.log("usuário não encontrado");
};

//LAÇO/LOOP FOR----------------------------------------------------------------------------------------------
console.log("LAÇO/LOOP FOR-----------------------------");

//for (definição; condição; ação) {
//  código a ser executado
//}

//for (let x = 0; x < 5; x++) {
//  console.log("o número é " + x + "!");
//}

//definição: let x = 0. Define uma variável, x, e atribui o valor INICIAL de 0. ...................................................................................... podem existir várias definições
//condição: x < 5. Da a condição para o código ser executado, o valor de x deve ser menor que 5. Se a condição é true, o loop vai iniciar novamente, se for false o loop para
//ação: x++. Define o que irá acontecer com a variável após o código ser executado, toda vez que o código ser executa, o valor de x terá um acréscimo de 1.

for(let i = 1; i <=5; i++){
    if(i % 2 !== 0){ // se o restante(%) dessa divisão for diferente de 0 (ou seja, ímpar)
        console.log("números ímpares:" + i);
    }
};

//LAÇO/LOOP WHILE-------------------------------------------------------------------------------------------
console.log("LAÇO/LOOP WHILE---------------------------------");

//Diferentemente do loop for, a definição DEVE ser feita fora do loop
//"Enquanto tal (condição) for verdadeira, execute tal código" \/
//while (condição) {
//  código a ser executado
//}

let i = 5; //variavel fora do loop
while(i >= 1){
    if(i % 2 == 0){ // se o restante(%) dessa divisão for igual a 0 (ou seja, par), enquanto isso for true, o loop repetirá
        console.log("números pares:" + i);
    }
    i--;
}

//LAÇO/LOOP DO WHILE------------------------------------------------------------------------------------------
console.log("LAÇO/LOOP DO WHILE----------------------------------------");

//do...while define um código que deve ser executado uma vez, e repetido desde que a condição seja true.
//é usado quando você quer que um código seja executado pelo menos uma vez, independente da condição p/ loop

//do{
    //bloco de código a ser executado
    //x++;
//}
//while (condição);

let g = 1;

do{
    console.log("número " + g );
    g++;
}
while (g <= 7);

//LAÇO/LOOP FOR...IN-------------------------------------------------------------------------------------------------------------
console.log("LAÇO/LOOP FOR...IN------------------------------");
//usado para percorrer as propriedades de um OBJETO
//o código dentro do loop é executado para cada ítem (indice)

//for (declaraçãoDeUmaVariável in estruturaQueQueroPercorrer) {
    //código a ser executado
//}

//vai colocar cada propriedade do objeto como valor da variável declarada

const meuBibe = {
    nomeDoBibe: "Luiz Gusteivo", // key: value
    idadeDoBibe: "25"
};

for(let dadosDoBibe in meuBibe){ //definindo a existência de uma variável
    console.log(dadosDoBibe); //apenas o nome da variável iria imprimir o nome da key, junto com o nome do objeto também imprime os valores
};


//LAÇO/LOOP FOR...OF------------------------------------------------------------------
console.log("LAÇO/LOOP FOR...OF-------------------------");

//usado para percorrer as propriedades de um ARRAY

const corzinhas = ["vermelinho", "azulzinho", "verdinho"];

for(let f of corzinhas){
    console.log(f); //imprime os VALORES dos elementos (0,1,2...) do array, o for in imprimiria apenas os elementos
}

//TERCEIRO EXERCÍCIO-------------------------------------------------------------------------------------
console.log("TERCEIRO EXERCÍCIO----------------------");

function retornaOMaior(n1, n2){
    let maior = n2
    if (n1 > n2){
        maior = n1
    }
    
    return maior //o segundo return é possível pois no primeiro return ele nem chegou a ser lido
    
};

console.log(retornaOMaior(1,50));


//QUARTO EXERCÍCIO: FIZZBUZZ---------------------------------------------------------------------------------------------
console.log("QUARTO EXERCÍCIO FIZZBUZZ---------------------------------");

function fizzBuzz (numero){
        if (typeof numero != "number")
        return "Não é um numero"
    if (numero % 3 === 0 && numero % 5 === 0)
        return "FizzBuzz"
    if (numero % 3 === 0)
        return "Fizz"
    if (numero % 5 === 0)
        return "Buzz"
    if (numero % 3 != 0 || numero % 5 != 0)
        return "Não divisivel por 3 ou 5"
}

console.log(fizzBuzz(4));

//QUINTO EXERCÍCIO: VERIFICADOR DE VELOCIDADE-------------------------------------------------------------------------------
console.log("QUINTO EXERCÍCIO: VERIFICADOR DE VELOCIDADE-----------------------------------");

//velocidade máxima 70km
//a cada 5km acima do limite ganha 1 pt
//usar math.floor: retorna o menor número inteiro a partir do número estipulado
//ex: math.floor(3.5) retorna 3, math.ceil(3.5) retorna 4.
//caso pontos > 12 ---> "carteira suspendida"


function verificarVelocidade (velocidade){
    let pontos = 0
    if (velocidade >= 130)
    return "Carteira suspensa";

    if (velocidade <= 70)
    return "Dentro do limite";

    if (velocidade > 70) {
        for (let l = 70; l < velocidade; l = l + 5 ){
            pontos = pontos + 1 
        }
    }
    return "Acima do limite, " + pontos + " pontos"
}

console.log(verificarVelocidade(100))