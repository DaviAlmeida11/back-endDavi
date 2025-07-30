/****************************************************************************************                                                                                                         
 * Objetivo: Apresenta comados basicos do node.js
 * autor: Davi de Almeida Santos
 * Data: 29/07/2025
 * Versão: 1.0
 *************************************************************************************************/



//importa a classe redline do node
var readline = require('readline')

//cria uma interface de comunicação no terminal  para entrada e saidas de  ados 
var entradaDeDados = readline.createInterface({
     input: process.stdin,
     output: process.stdout
})


//aciona uma função que devolce o que foi digitado 
entradaDeDados.question('digite seu nome: ', function(nome){

  var nomeUsuario = nome 
  //validação da entradad de dados vazio 
  if(nomeUsuario == ''){
    console.log('ERRO: NÂO FOI POSSIVEL PROCESSAR A REQUISIÇÂO, campo obrigatório ')
  
  }else{
    //Classe string = converte uma variavel em string 
    //toUpperCase converte o material em letra maiuscula 
  console.log('O nome digitado foi: ' + String(nomeUsuario).toUpperCase())
  console.log(nome)
  }

})




/**
 *
 * //Permite escrever um conteudo de uma String ou um objeto no terminal
console.log('aula 01 de node.js') 

//criei uma variavel com o meu nome
var nome = Davi

//exemplo de concatenação de conetudo (String + variavel)
console.log('O nome digitado foi: '+ nome)

//contataena usando a crase no lugar das aspas, para colocar a variavel dentro do bloco 
console.log(`O nome digitado foi:${nome}!`)

 * 
 * 
 * //typeof()- retorna o tipo de dado de uma variavel ou objeto 
onsole.log(typeof(nome))


 * 
//Permite escrever um conteudo de uma String ou um objeto no terminal
console.log('aula 01 de node.js') 
 * 
 * //criei uma variavel com o meu nome
var nome = Davi

 * 
 * //exemplo de concatenação de conetudo (String + variavel)
console.log('O nome digitado foi: '+ nome)

//contataena usando a crase no lugar das aspas, para colocar a variavel dentro do bloco 
console.log(`O nome digitado foi:${nome}!`)
 * 
 * 
 * 
//typeof()- retorna o tipo de dado de uma variavel ou objeto 
onsole.log(typeof(nome))

 * //comentario em linha 
/*comentario em bloco */



