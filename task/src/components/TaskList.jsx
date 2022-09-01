import TaskCard from './TaskCard'

function TaskList({ datos, clikDelete }) {

if(datos.length === 0){
    return <p className="h1 text-muted">SIN TAREAS...</p>
}

    return (
        <div className="row row-cols-md-3">
            {
                datos.map((x) => (
                    <TaskCard key={x.id} item={x} clikDelete={clikDelete} />
                ))
            }
        </div>
    )
}

export default TaskList