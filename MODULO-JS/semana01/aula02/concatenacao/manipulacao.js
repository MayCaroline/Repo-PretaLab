const nomeCompleto = "Letícia Luzia Silva Furtado"
const tamanhoString = nomeCompleto.length
console.log(tamanhoString)

//string.split() usa pra separar a partir do lugar determinado, no caso aqui foi apartir do @, uma frase, e-mail,strins em geral, então o @ foi "splitado" ele n vai aparecer no console.log pois foi ele q usei como separdor. E o 1 quer dizer que quero só a primeira parte do q foi separado

/*let email = "leticialuzia@gmail.com"
const nomeUsuario = email.split('l')
console.log(nomeUsuario)*/

let email = "leticialuzia@gmail.com"
const nomeUsuario = email.split('@', 1)
console.log(nomeUsuario)

