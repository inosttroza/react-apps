import TaskAdd from "./components/TaskAdd";
import TaskList from "./components/TaskList";

function App() {
  return (
    <main>
      <div className="container">
        <TaskAdd />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
