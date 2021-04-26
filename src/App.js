import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import About from "./components/About";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    //렌더링이 된 직후 바로 실행
    console.log("useEffect()");
    const getTasks = async () => {
      console.log("1");
      const tasksFromServer = await fetchTasks();
      console.log("tasksFromServer?>", tasksFromServer);
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    // async() 함수 내부에서만 await를 사용할 수 있습니다.
    // await가 붙은 요청들은 비동기처리로, 결괏값을 얻을때까지 기다려줍니다.
    // try catch로 예외처리가 가능합니다.
    try {
      const res = await fetch("http://localhost:5000/tasks");
      const data = res.json();
      console.log("App.js fetchTasks() res data>", data);
      return data;
    } catch (e) {
      console.log(" App.js fetchTasks() error > ", e);
    }
  };

  const fetchTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
      console.log("App.js fetchTask() data, id >", data, id);

      return data;
    } catch (e) {
      console.log("App.js fetchTask() error >", e);
    }
  };

  const addTask = useCallback(
    async (task) => {
      try {
        console.log("App.js addTask() task >", task);
        const res = await fetch("http://localhost:5000/tasks", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(task),
        });

        const data = await res.json();
        console.log("App.js addTask() data >", data);
        setTasks([...tasks, data]);
      } catch (e) {
        console.log("App.js addTask() error >", e);
      }
    },
    [tasks]
  );

  const deleteTask = async (id) => {
    try {
      console.log("deleteTask() id >", id);
      if (window.confirm("정말 지우시겠습니까?")) {
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE",
        });
        console.log("App.js deleteTask() res >", res.json());
        res.status === 200
          ? setTasks(tasks.filter((task) => task.id !== id))
          : alert("Error deleting tasks");
      } else {
        return;
      }
    } catch (e) {
      console.log("App.js deleteTask() error >", e);
    }
  };

  const toggleReminder = async (id) => {
    try {
      console.log("App.js toggleReminder() id >", id);
      const taskToToggle = await fetchTask(id);
      const updateTask = {
        ...taskToToggle,
        reminder: !taskToToggle.reminder,
      };

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updateTask),
      });
      const data = await res.json();

      console.log("App.js toggleReminder() data >", data);
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, reminder: data.reminder } : task
        )
      );
    } catch (e) {
      console.log("App.js toggleReminder() error >", e);
    }
  };
  return (
    <Router>
      <div className="container">
        <Header
          onAdd={useCallback(() => {
            setShowAddTask(!showAddTask);
          }, [showAddTask])}
          showAdd={showAddTask}
        />
        <hr />
        <br />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Task"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
