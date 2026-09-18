import TaskItem from "./TaskItem";

export default function TaskList({tarefas, onConcluir, onExcluir}){
    return (
        <>
            <div>
                {tarefas.map((tarefa) => (
                    <TaskItem 
                        key={tarefa.id}
                        titulo={tarefa.titulo}
                        descricao={tarefa.descricao}
                        concluida={tarefa.concluida}
                        onConcluir={()=> onConcluir(tarefa.id)}
                        onExcluir={()=> onExcluir(tarefa.id)}
                    />
                ))}
            </div>
        </>
    )
}