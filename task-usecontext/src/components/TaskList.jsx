import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from "../context/TaskContext";

function TaskList() {

    const { data } = useContext(TaskContext);

    if (data.length === 0) {
        return <p className="h1 text-muted">SIN TAREAS...</p>
    }

    return (
        <div className="row row-cols-md-3">
            {
                data.map((x) => (
                    <TaskCard key={x.id} item={x} />
                ))
            }
        </div>
    )
}

export default TaskList