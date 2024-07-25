const carros = [
    {nome: 'corola', ano: 2018},
    {nome: 'gol', ano: 2009},
    {nome: 'argo', ano: 2024},
    {nome: 'pampa', ano: 1999}
];

const carrosDepois2010 = carros.filter((carro) => carro.ano > 2010)

console.log(carrosDepois2010)