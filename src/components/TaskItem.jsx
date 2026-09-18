import React from "react";

export default function TaskItem({titulo, descricao, concluida, onConcluir, onExcluir}){
    return (
        <>
            <h2>Titulo: {titulo}</h2>
            <p>Descrição: {descricao}</p>
            <p>Status: {concluida ? "Concluida" : "Pendente"}</p>

            {!concluida && (
                <button onClick={onConcluir}>Concluir</button>
            )}

            <button onClick={onExcluir}>Excluir</button>
        </>
    )
}