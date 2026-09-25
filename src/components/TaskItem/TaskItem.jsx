import React from "react";
import styles from "./TaskItem.module.css";

export default function TaskItem({
    titulo,
    descricao,
    concluida,
    onConcluir,
    onExcluir
}) {
    return (
        <div className={`${styles.task} ${concluida ? styles.completed : ""}`}>

            <div className={styles.taskContent}>
                <div className={styles.taskHeader}>
                    <div className={styles.titleArea}>
                        <span className={styles.check}>
                            {concluida ? "✓" : "○"}
                        </span>

                        <h2>{titulo}</h2>
                    </div>

                    <div className={styles.actions}>
                        <button
                            className={styles.completeButton}
                            onClick={onConcluir}
                            title={concluida ? "Desmarcar tarefa" : "Concluir tarefa"}
                        >
                            ✓
                        </button>

                        <button
                            className={styles.deleteButton}
                            onClick={onExcluir}
                            title="Excluir tarefa"
                        >
                            🗑
                        </button>
                    </div>
                </div>

                <p className={styles.description}>
                    {descricao}
                </p>

                <span
                    className={`${styles.status} ${
                        concluida ? styles.statusCompleted : styles.statusPending
                    }`}
                >
                    <span className={styles.statusDot}></span>
                    {concluida ? "Concluída" : "Pendente"}
                </span>
            </div>
        </div>
    );
}
