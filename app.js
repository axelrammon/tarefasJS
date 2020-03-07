var inputTarefa = document.querySelector('input');
var btnAdd = document.querySelector('button');
var ulList = document.querySelector('#tarefas ul');

var tarefas = JSON.parse(localStorage.getItem('tarefas_lista')) || [];

function listarTarefas() {

  ulList.innerHTML = '';

  for (tarefa of tarefas) {

    var divTarefa = document.createElement('div');
    divTarefa.setAttribute('class', 'tarefa');
    var novaTarefa = document.createElement('li');
    var textoTarefa = document.createTextNode(tarefa);
    
    var buttonExcluir = document.createElement('button');

    var nomeExcluir = document.createTextNode('Excluir');
    buttonExcluir.appendChild(nomeExcluir);

    var pos = tarefas.indexOf(tarefa);
    buttonExcluir.setAttribute('onclick', 'deletarTarefa('+ pos +')');


    novaTarefa.appendChild(textoTarefa);
    novaTarefa.appendChild(buttonExcluir);

    if (textoTarefa.length > 0) {
      divTarefa.appendChild(novaTarefa);
      ulList.appendChild(divTarefa);
    }

  }
  
}

listarTarefas();

btnAdd.onclick = () => {
  var novaTarefa = inputTarefa.value;

  tarefas.push(novaTarefa);
  inputTarefa.value = '';
  listarTarefas();
  saveToStorage();
}

function deletarTarefa(pos) {
  tarefas.splice(pos, 1);
  listarTarefas();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('tarefas_lista', JSON.stringify(tarefas));
}