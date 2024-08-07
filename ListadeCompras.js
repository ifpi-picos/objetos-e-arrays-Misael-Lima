// Inicialização da lista de compras
let listaCompras = [];

// Função para exibir o menu de opções
function exibirMenu() {
  console.log("\n----- MENU -----");
  console.log("1. Adicionar item");
  console.log("2. Remover item");
  console.log("3. Pesquisar item");
  console.log("4. Ordenar lista");
  console.log("5. Exibir lista");
  console.log("6. Limpar lista");
  console.log("7. Encerrar programa");
  console.log("----------------");
}

// Função para adicionar um item
function adicionarItem(item) {
  listaCompras.push(item);
  console.log(`Item '${item}' adicionado à lista.`);
}

// Função para remover um item
function removerItem(item) {
  const index = listaCompras.indexOf(item);
  if (index !== -1) {
    listaCompras.splice(index, 1);
    console.log(`Item '${item}' removido da lista.`);
  } else {
    console.log(`Item '${item}' não encontrado na lista.`);
  }
}

// Função para pesquisar um item
function pesquisarItem(item) {
  if (listaCompras.includes(item)) {
    console.log(`Item '${item}' está na lista.`);
  } else {
    console.log(`Item '${item}' não está na lista.`);
  }
}

// Função para ordenar a lista
function ordenarLista() {
  listaCompras.sort();
  console.log("Lista ordenada.");
}

// Função para exibir a lista
function exibirLista() {
  if (listaCompras.length === 0) {
    console.log("A lista de compras está vazia.");
  } else {
    console.log("Itens na lista de compras:");
    listaCompras.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

// Função para limpar a lista
function limparLista() {
  listaCompras = [];
  console.log("Lista de compras limpa.");
}

// Função principal para controlar o programa
function gerenciarLista() {
  let encerrar = false;
  while (!encerrar) {
    exibirMenu();
    const escolha = prompt("Escolha uma opção: ");
    switch (escolha) {
      case "1":
        const itemAdicionar = prompt("Digite o item a ser adicionado: ");
        adicionarItem(itemAdicionar);
        break;
      case "2":
        const itemRemover = prompt("Digite o item a ser removido: ");
        removerItem(itemRemover);
        break;
      case "3":
        const itemPesquisar = prompt("Digite o item a ser pesquisado: ");
        pesquisarItem(itemPesquisar);
        break;
      case "4":
        ordenarLista();
        break;
      case "5":
        exibirLista();
        break;
      case "6":
        limparLista();
        break;
      case "7":
        encerrar = true;
        console.log("Programa encerrado.");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }
}

// Execução do programa
gerenciarLista();

const listaDeComprar = []

let listaDeCompras = []

function menu(){
  console.log('----menu----')
  console.log('1-Adicionar um item')
  console.log('2-Remover um item')
  console.log('3-Remover um item')
  console.log('4-Pesquisar item')
  console.log('5-Ordenar a lista')
  console.log('6-Exibir lista')
  console.log('7-Limpar a lista')
  console.log('Encerrar programa')
}

menu()


