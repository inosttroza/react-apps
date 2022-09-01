import React from 'react'
import { useState } from 'react'

function TaskAdd({ clikAdd }) {

    const [titulos, setTitulos] = useState('')
    const [prioridades, setPrioridades] = useState('')
    const [descripciones, setDescripciones] = useState('')

    const click = () => {
console.log(prioridades)
        if (prioridades === "" || titulos.length === 0) {
            return alert("Titulo y prioridad obligatorios")
        }

        const item = {
            titulo: titulos,
            prioridad: prioridades,
            descripcion: descripciones
        }
        clikAdd(item)
        setTitulos('');
        setPrioridades('Seleccione');
        setDescripciones('');
    }

    return (
        <div className="col-md-4 mx-auto bg-secondary mt-4">
            <p className="text-light">Crea tu tarea</p>
            <div className="mx-4">
                <input placeholder='input titulo'
                    onChange={(e) => setTitulos(e.target.value)}
                    value={titulos}
                    className="form-control mt-4 mb-2"
                ></input>
                <select onChange={(e) => setPrioridades(e.target.value)}
                    value={prioridades}
                    className="form-select"
                >
                    <option defaultValue>Seleccione</option>
                    <option value="baja">baja</option>
                    <option value="media">media</option>
                    <option value="alta">alta</option>
                </select>
                <textarea placeholder='input descripcion'
                    onChange={(e) => setDescripciones(e.target.value)}
                    value={descripciones}
                    className="form-control mt-2 mb-2 row-4 b-8"
                ></textarea>
                <button onClick={click}
                    className="btn btn-dark"
                >Add</button>
                <hr />
            </div>
        </div>
    )
}

export default TaskAdd