import styles from "./TaskSummary.module.css"

export default function TaskSummary({ tarefas }) {
    const total = tarefas.length;

    const concluidas = tarefas.filter(
        (tarefa) => tarefa.concluida
    ).length;

    const pendentes = total - concluidas

    return (
        <>
            <div className={styles.container}>
                <p className={styles.itens}>Pendentes: {pendentes}</p>
                <p className={styles.itens}>Concluídas: {concluidas}</p>
                <p className={styles.itens}>Totais: {total}</p>
            </div>
        </>
    )
}