export default function TaskSummary ({tarefas}){
    const total = tarefas.length;

    const concluidas = tarefas.filter(
        (tarefa) => tarefa.concluida
    ).length;   
    
    const pendentes = total - concluidas
    
    return (
        <>
            <div>
                <h3>Resumo:</h3>
                <p>Pendentes: {pendentes}</p>
                <p>Concluídas: {concluidas}</p>
                <p>Totais: {total}</p>
            </div>
        </>
    )
}