const nome = "Letícia"
const sobrenome = "Furtado"
const sentimento = "hoje estou feliz, mas estou com fome."

//Tradicional jeito de concatenar/ juntar strings e variaveis
console.log("Olá, " + nome + " " + sobrenome + "! " + sentimento)

//Template String o jeito MAIS USADO de concatenar/ juntar strings e variaveis sempre iniciando com crases e ${} com a variavel dentro
console.log(`Olá, ${nome}!`)
console.log(`Olá, ${nome} ${sobrenome}! ${sentimento}`)
