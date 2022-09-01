import { useState, useEffect } from "react";
import TaskAdd from "./components/TaskAdd";
import TaskList from "./components/TaskList";
import { datos } from "./data/datos";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(datos)
  }, [])

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

  return (
    <main>
      <div className="container">
        <TaskAdd clikAdd={clikAdd} />
        <TaskList datos={data} clikDelete={clikDelete} key={data.id} />
      </div>
    </main>
  );
}

export default App;
