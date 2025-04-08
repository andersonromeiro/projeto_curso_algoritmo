var valor01, valor02, operacao, res

function acaoBotao(params) {
  valor01 = prompt ("Digite o primeiro valor: ")
  operacao = prompt ("Digite a operação, (Ex: + , - , / , *): ")
  valor02 = prompt ("Digite o segundo valor: ")

  switch (operacao) {
    case "+":
        res = parseInt(valor01) + parseInt(valor02)
    break;
    case "-":
        res = parseInt(valor01) - parseInt(valor02)
    break;
    case "/":
        res = parseInt(valor01) / parseInt(valor02)
    break;
    case "*":
        res = parseInt(valor01) * parseInt(valor02)
    break;
  }
    document.getElementById("paragrafo").innerText = res
}