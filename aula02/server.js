/*******************************************************************************************************************************************************************************************
 * Objetivo: Criar um app para o calculo de meédia escolares
 * Autor: Davi de Almeida Santos
 * Data: 30/07
 * Versão: 1.0
 **************************************************************************************************************************************************************************************************/
const MESSAGE_ERROR_EMPYTY = 'Não foi possivel concluir a média, pois algum dos campos não foram preenchidos completamente!'
const MESSAGE_ERROR_OUT_OF_REAGE = 'Dados não compativeis'
const MESSAGE_ERROR_NAN = 'Não pode ter a entrada de letras nesses campos'
const MESSAGE_ERROR_NAME = 'não pode colocar'

//import da biblioteca para calcular as médoas escolares 




//No java script pode ter 3 formas de criar uma variavel o VAR, LET e o CONST cria uma constante, quando não possue mudança no código utiliza o CONST, ja com mudança pode usar LET e VAR(forma mais antiga de fazer)

//LET: Tudo que é criado tento dos blocos(que são isso {}) tem q utilizar LET, por exemplo: if, loop, etc /  permite criar um espaço em memória, essas variaveis morrem ao termino do bloco 

//VAR: Apenas fora dos bococs utiliza-se a própria / permite criar um espaço em memória, que pode ser alterado 

//CONST: Pode cer criada em qualquer lugar (escrever ela em maiusculo ) / permite criar um espaço em memória, e não pode ser alterada na programação.

//toUpperCase: converte a String para maiscula 

//toLowerCAse: converte a String para minutos

//String: converte o objeto ou vareavel para String 

//Number: converte uma vareavel para um número seja enteiro ou quebrado

//parseInt: converte uma vareavel para um número inteiro

//parsefloat: converte um número para decimal

//Boolean: converte uma variavel para true or false 

//Object: Converte uma vareavel para um objeto
/**
 * Operadores de operação IF:
 * == Validação para comparar a igualdade de conteudos 
 * != Validação para comparar a diferença entre conteudos 
 * < Validação para verificar menor valor
 * > Validação para verificar o maior valor
 * <= Validação para identificar a igualdade ou o menor valor
 * >= Validação para identificar a igualdade ou maior valor
 * === Validaçaõ para comprara a igualdade de conteudos e a igualdade de tipo de dados 
 * !== Validação para comparar a diferença de conteudo e a igualdade de tipo de dados 
 * !=! Validação para comparar a diferença de conteudo e a diferença de tipo de dados 
 * 
 * E and &&(segundo a ser executado)
 * OU OR ||(terceiro a ser executado)
 * não not !(sempre ser o primeiro a ser executado)
 * () Sempre a ser executado antes dos outros
 * Utiliza-se a crase para contatenação rapida
 */


//import da biblioteca para permitir a entrada de dados para o terminal

const mediaEscolar = require('./modulo/meida.js')

var readline = require("readline")

//Criando uma interface de entrada e saida de dados no terminal 
var entradaDeDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

//entrada de dados do nome 
entradaDeDados.question('digite o nome do Aluno: ', function(nome){
    
  let nomeAluno = String(nome).toUpperCase()

   //Entrada de dados na nota 1
    entradaDeDados.question('Digite a nota 1:', function(valor1){
        let nota1 = valor1 

       //Entrada da nota 2
        entradaDeDados.question('Digite a nota 2:', function(valor2){
           let nota2 = valor2

            //Entrada da nota 3
            entradaDeDados.question('Digite a nota 3:', function(valor3){
               let nota3 = valor3

                //Entrada da nota 4
                 entradaDeDados.question('Digite a nota 4:', function(valor4){
                   let nota4 = valor4
                       //Se o nome e as notas não vierem nada aparece a mensagem de erro
                    if(nome == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ){
                        console.log(MESSAGE_ERROR_EMPYTY)
                    }else if(!isNaN (nome)){
                        console.log(MESSAGE_ERROR_NAME)
                        //validação para dexar os número entre 0 e 10
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log(MESSAGE_ERROR_NAN)
                    }else if(   Number(nota1) < 0 || Number(nota1) > 10 ||
                                Number(nota2) < 0 || Number(nota2) > 10 ||
                                Number(nota3) < 0 || Number(nota3) > 10 ||
                                Number(nota4) <0 || Number(nota4)>10 ){
                      console.log(MESSAGE_ERROR_OUT_OF_REAGE)  
                                }else{
                                    let media = mediaEscolar.calcularMedia(nota1, nota2, nota3, nota4)
                                    let statusAluno = mediaEscolar.validarMedia(media)

                                    if(statusAluno){
                                        console.log(`O aluno ${nomeAluno} teve a média: ${media} e está ${statusAluno}!`)
                                    }
                                }

                

                })//valor 4
            })//valor 3
       })//valor 2
    })//valor 1
})//fecha a entrada do nome
