/*
   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   escreval ("Digite o nome:")
   leia (nome)
   escreval ("Digite a idade:")
   leia (numero)
   
   escreval (nome, " : ", numero, " anos")
*/

var nome, numero;

nome = prompt ("Digite o nome:")
numero = prompt ("Digite a idade:")

document.getElementById ("paragrafo").innerText = nome + " : " + numero + " anos"