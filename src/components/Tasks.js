import EachTask from "./EachTask";
import { memo } from "react";
const Tasks = memo(({ tasks, onDelete, onToggle }) => {
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
});

export default Tasks;
