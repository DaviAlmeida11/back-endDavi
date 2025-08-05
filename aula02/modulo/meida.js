/**************************************************************************************************************************************************************************
 * Objetivo: Arquivo responsavel por calcular validar media escolares
 * Autor:  Davi 
 * Data: 05/08/2025
 * versão: 1.0
 *****************************************************************************************************************************************************************************/

//Função para calcucalar média escolar
function calcularMedia(valor1, valor2, valor3, valor4 ){
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    return Number(media).toFixed(1)

   
}

 function validarMedia(valorMedia){
  let media = Number(valorMedia)
 
  let statusAluno 

  if(media >= 7 && media <=10){
    statusAluno = "Aprovado"
 }else if(media < 7 && media >= 5 ){
    statusAluno = "EXAME"
 }else if(media < 5 && media >= 0 ){
     statusAluno = 'Reprovado'
 }


 if(statusAluno != undefined){
    return statusAluno
 }else{
    return false
 }

  }
 //let mediaAluno = calcularMedia(('8', '10', '7', '9'))
 //console.log(mediaAluno)
 //console.log(validarMedia (mediaAluno))
  

//console.log(calcularMedia('8','10','5.6','8.9'))

//permite deixar publica para conseguir utilizar em outra lugar
module.exports ={
    calcularMedia,
    validarMedia
}