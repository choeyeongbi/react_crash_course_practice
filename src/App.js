import { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import About from "./components/About";
import ModifyTask from "./components/ModifyTask";
import axios from "axios";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [task, setTask] = useState("")
  

  useEffect(() => {
    //렌더링이 된 직후 바로 실행
    console.log("useEffect()");
    const getTasks = async () => {
      // console.log("1");
      const tasksFromServer = await fetchTasks();
  //    console.log("tasksFromServer?>", tasksFromServer);
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  //task list 가져옴
  const fetchTasks = async () => {
    // async() 함수 내부에서만 await를 사용할 수 있습니다.
    // await가 붙은 요청들은 비동기처리로, 결괏값을 얻을때까지 기다려줍니다.
    // try catch로 예외처리가 가능합니다.
    try {
      console.log("fetchTasks()");
      // const res = await fetch("http://localhost:5000/tasks");
      const res = await axios.get("/tasks");
      //console.log('res>',res.request.response)
 //     console.log("res : ", res);
      const data = res.data._embedded.tasks;
 //     console.log("App.js fetchTasks() res data >", data);

      return data;
    } catch (e) {
      console.log(" App.js fetchTasks() error > ", e);
    }
  };

  // 하나의 task 가져옴
  const fetchTask = async (id) => {
    try {
 //     console.log("fetchTask()");
      //  const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const res = await axios.get(`/tasks/${id}`);
  //console.log('fetchTask() res::',res)
  const data = res.data;
  //    console.log("fetchTask() data -->", data);

      return data;
    } catch (e) {
      console.log("App.js fetchTask() error >", e);
    }
  };

  const addTask =  async (task) => {
      //   console.log('task:',task)
      try {
        const res = await axios.post("/tasks", task);

        const data = res.data;

   //     console.log("App.js addTask() data >", data);
        setTasks([...tasks, data]);
      } catch (e) {
        console.log("App.js addTask() error >", e);
      }
    };



  const deleteTask = async (id) => {
  
 //   console.log('deleteTask() id:',id)

    try {
    //  console.log("url:", task._links.task.href);
       if (window.confirm("정말 지우시겠습니까?")) {
        const res = await axios.delete(`/tasks/${id}`);

     //    console.log("deleteTask() res ::: ", res);

        res.status < 300
          ? setTasks(tasks.filter((task) => task.id !== id))
          : alert("Error deleting tasks",res.status,res.statusText);
       } else {
         return;
       }
    } catch (e) {
      console.log("App.js deleteTask() error >", e);
    }
  };

  const toggleReminder = async (id) => {
    try {
    //  console.log("App.js toggleReminder() id >", id);

      const taskToToggle = await fetchTask(id);
       const updateTask = {
         ...taskToToggle,
         reminder: !taskToToggle.reminder,
       };
    
       const res = await axios.patch(`/tasks/${id}`, updateTask);
       const data = res;
       
     //  console.log("App.js toggleReminder() data >", data);
       setTasks(
         tasks.map((task) =>
         task.id === id ? { ...task, reminder: data.reminder } : task
         )
         );
    } catch (e) {
      console.log("App.js toggleReminder() error >", e);
    }
  };


  const modifyTask = async({text,date,reminder,id,eachTask}) => {
         console.log('modifyTask() eachTask:',eachTask)
        
      try {
  
         const res = await axios.patch(`/tasks/${id}`,{text, date,reminder});


       // console.log("App.js addTask() res >", res.config.data);
         const data = res.config.data;
   
      } catch (e) {
        console.log("App.js addTask() error >", e);
      }
    };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => {
            setShowAddTask(!showAddTask);
          }, [showAddTask]}
          showAdd={showAddTask}
        />
        <hr />
        <br />
        <Route
          path="/"
          exact
          render={() => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}

              {tasks && tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onModify={modifyTask} 
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
