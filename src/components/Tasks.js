import EachTask from "./EachTask";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  console.log("Tasks>", tasks);
  return (
    <>
      {tasks.map((task, i) => (
        <EachTask
          key={i}
          eachTask={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
