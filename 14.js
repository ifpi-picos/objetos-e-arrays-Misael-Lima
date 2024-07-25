let filmes = []

for (let i = 0; i < 5; i++) {
    filmes.push(prompt('digite o nome de um filme: '))
}

console.log(filmes);

for(let i = 0; i < filmes.length; i++){
    console.log(filmes[i])
};

//for(const filme of filme){
//   console.log(filme)
//};
//////