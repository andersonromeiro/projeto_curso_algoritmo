/*escreval ("Digite Nome do Aluno")
leia (nome)
escreval ("Digite a primeira nota")
leia (nota01)
escreval ("Digite a segunda nota")
leia (nota02)
media:= (nota01 + nota02) / 2

se media >= 50 entao
   escreval ("Aprovado!", nome)
senao
   escreval ("Reprovado!", nome)
fimse*/

var nome, nota01, nota02;
nome = prompt ("Digite Nome do Aluno:")
nota01 = prompt ("Digite a primeira nota do aluno:")
nota02 = prompt ("Digite a segunda nota do aluno:")

media = (parseInt(nota01) + parseInt(nota02)) /2

if(media >=50)
    alert ("Aprovado o aluno!" + nome)
else
    alert ("Reprovado o aluno!" + nome)