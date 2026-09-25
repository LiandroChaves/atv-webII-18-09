import React from "react";
import styles from "./Header.module.css"

export default function Header () {
    return (
        <>
            <div className={styles.containerHeader}>
                <h1>Tarefas</h1>
                <h2>veja as suas tarefas abaixo:</h2>
            </div>
        </>
    )
}