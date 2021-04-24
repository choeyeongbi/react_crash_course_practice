import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import About from "./components/About";

const tasks = [
  {
    id: 1,
    text: "doctors appointment",
    day: "Feb 5th at 14:30",
    reminder: true,
  },
  {
    id: 2,
    text: "meeting at school",
    day: "Feb 7th at 13:30",
    reminder: true,
  },
  {
    id: 3,
    text: "food market shopping",
    day: "Feb 6th at 14:00",
    reminder: false,
  },
];

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    console.log("useEffect()");
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:3000/tasks");
    const data = res.json();
    console.log("fetchTasks() data>", data);
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`);
    const data = await res.json();
    console.log("fetchTask() data>", data);

    return data;
  };

  const addTask = async (task) => {
    console.log("addTask()", task);
    const res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id) => {
    console.log("deleteTask()", id);

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error deleting tasks");
  };

  const toggleReminder = async (id) => {
    console.log("toggleReminder()", id);
    const taskToToggle = await fetchTask(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateTask),
    });
    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <hr />
        <br />
        <Tasks tasks={tasks} onDelete={deleteTask} />
      </div>
    </Router>
  );
};

export default App;
