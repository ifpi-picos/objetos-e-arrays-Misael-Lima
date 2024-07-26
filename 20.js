const nomeIdade = [
    {nome: 'paulo', idade: 19},
    {nome: 'pedro', idade: 20},
    {nome: 'maria', idade: 17},
    {nome: 'alice', idade: 14},
    {nome: 'joão', idade: 16},
]

const PessoaMaiorIdade = nomeIdade.find((nomeIdade) => nomeIdade.idade > 18)
console.log(PessoaMaiorIdade)