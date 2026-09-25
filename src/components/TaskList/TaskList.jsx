import TaskItem from "../TaskItem/TaskItem";
import styles from "./TaskList.module.css"

export default function TaskList({tarefas, onConcluir, onExcluir}){
    return (
        <>
            <div className={styles.lista}>
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