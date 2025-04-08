/*
   valor01, valor02, res: real
   operacao: caracter
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   Escreval ("A proposta deste programa e calcular dois valores na operação da sua escolha")
   
   escreva ("Digite o primeiro valor: ")
   leia (valor01)
   
   escreval ("Digite a operação: ")
   escreval ("Ex: + , - , / , +")
   leia (operacao)
   
   escreva ("Digite o segundo valor: ")
   leia (valor02)
   
   se operacao = "+" entao
      res:= valor01 + valor02
   senao
        se operacao = "-" entao
           res:= valor01 - valor02
        senao
             se operacao = "/" entao
                res:= valor01 / valor02
             senao
                  se operacao = "*" entao
                     res:= valor01 * valor02
                  fimse
             fimse
        fimse
   fimse
   escreva ("Resultado do calculo é: ", res)
*/
var valor01, valor02, operacao, res

function acaoBotao(){
   valor01 = prompt ("Digite o primeiro valor: ")
   operacao = prompt ("Digite a operação, (Ex: + , - , / , *): ")
   valor02 = prompt ("Digite o segundo valor: ")
   
   if (operacao == "+" ){ 
         res = parseInt (valor01) + parseInt (valor02)
      }else if (operacao == "-"){
           res = parseInt (valor01) - parseInt (valor02)
      }else if (operacao == "/"){
           res = parseInt (valor01) / parseInt (valor02)
      }else if (operacao == "*"){
       res = parseInt (valor01) * parseInt (valor02)
      }

   document.getElementById("paragrafo").innerText = res
}

