import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import TaskSummary from './components/TaskSummary';
import TaskList from './components/TaskList';

function App() {

  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      titulo: "Testando 1",
      descricao: "xpto",
      concluida: false
    },
    {
      id: 2,
      titulo: "Testando 2",
      descricao: "xpto",
      concluida: false
    },
    {
      id: 3,
      titulo: "Testando 3",
      descricao: "xpto",
      concluida: false
    },
    {
      id: 4,
      titulo: "Testando 4",
      descricao: "xpto",
      concluida: false
    },
  ]);

  function concluirTarefa(id){
    setTarefas(prevTarefas => prevTarefas.map(tarefa => tarefa.id === id ? {...tarefa, concluida: ! tarefa.concluida} : tarefa));
  }

  function excluirTarefa(id){
    setTarefas(prevTarefas => prevTarefas.filter(tarefa => tarefa.id !== id));
  }

  return (
    <>
      <Header/>
      <TaskSummary 
        tarefas={tarefas}
      />
      <TaskList 
        tarefas={tarefas}
        onConcluir={concluirTarefa}
        onExcluir={excluirTarefa}/>
    </>
  )
}

export default App
