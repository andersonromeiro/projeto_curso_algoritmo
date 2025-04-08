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

