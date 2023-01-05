/* let numero = prompt("insira um numero")-0
let soma = 0 
while(numero!==0){
soma = soma + numero
console.log(soma);

numero = prompt("insira outro numero")-0
}
console.log("saiu do laço"); */
/* let numero = prompt('insira um numero')-0

    for(let i = 0;i<=numero;i++){
    console.log(i);
    }
    console.log('fim do laço') */
   /*  “O número do índice ${indice} é ${numero[indice]}” */
//indice++ ou  indice=indice+1)
  /*  const numero = [2,4,6,8,10]
   for(indice=0;indice-numero.length;indice=indice+1)//ou indice++
   {
    console.log(`O número do índice ${indice} é ${numero[indice]}`);
}
console.log('fim do laço'); */
/* let tipoUsuario = prompt("insira a letra correspondente \nA: para Administrador\nB: para Usuario comum \nC: para Usuario assinante").toUpperCase()

while(tipoUsuario!=="A"){
    console.log("acesso negado")
    tipoUsuario = prompt("insira a letra correspondente \nA para Administrador\nB para Usuário Comum \nC para Usuário Assinante").toUpperCase()
}
console.log("Bem vindo, Admin"); */

const numero = prompt('digite um numero')
for(i=0;i<11;i++){
    console.log(`tabuada de ${numero} \n
    ${numero}*${i}= ${i*numero}`)
}

const array = ["dougras", "samuca","Italo galã","Reydner"]
for(i=0;i<array.length;i++){
    console.log(array[i].toUpperCase())
}