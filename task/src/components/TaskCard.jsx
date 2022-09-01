import React from 'react'

function TaskCard({ item, clikDelete }) {

    const click = () => {
        clikDelete(item.id)
    }

    return (
        <div className="card text-white bg-secondary mb-1 mt-1 border-white">
            <h2 className="text-capitalize">{item.titulo}</h2>           
            <p className={
                item.prioridad == "baja" ? "bg-success"
                    : item.prioridad == "media" ? "bg-warning"
                        : "bg-danger p-8"
            }>{item.prioridad}</p>
            <p>{item.descripcion}</p>
            <button onClick={click}
                className="btn btn-dark align-self-start mb-1"
            >Delete</button>
        </div>
    )
}

export default TaskCard