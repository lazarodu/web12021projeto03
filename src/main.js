class List {
  constructor() {
    this.tarefas = [];
  }
  add(data) {
    this.tarefas.push(data);
  }
}
class FilhoList extends List {
  constructor() {
    super();
  }
  addFilho() {
    this.add("Conteúdo");
  }
  mostraTarefa() {
    console.log(this.tarefas);
  }
}
const minhaLista = new FilhoList();
window.document.querySelector("#novo").onclick = () => {
  minhaLista.addFilho();
  minhaLista.mostraTarefa();
};
