import { createContext, useState, useEffect } from 'react'
import { datos } from "../data/datos";

export const TaskContext = createContext();//nombre del contexto

export function TaskContextProvider(props) {

    const [data, setData] = useState([])

    const clikAdd = (itemFromTaskAdd) => {
        const newTask = {
            id: data.length,
            titulo: itemFromTaskAdd.titulo,
            prioridad: itemFromTaskAdd.prioridad,
            descripcion: itemFromTaskAdd.descripcion
        }
        setData([...data, newTask])
    }

    const clikDelete = (idIFromTaskCard) => {
        setData(data.filter(x => x.id !== idIFromTaskCard))
    }

    useEffect(() => {
        setData(datos)
    }, [])

    return (
        <TaskContext.Provider value={{
            data: data,
            clikAdd: clikAdd,
            clikDelete: clikDelete
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}
