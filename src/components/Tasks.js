import EachTask from "./EachTask";
import { memo } from "react";

const Tasks = memo(({ tasks, onDelete, onToggle,onModify  }) => {


  console.log("Tasks>", tasks);
  return (
    <>
     
      {tasks.map((task, i) => (
        <EachTask
          key={i}
          eachTask={task}
          onDelete={onDelete}
          dataId = {task.id}
          onToggle={onToggle}
          onModify={onModify}
        />
     
      ))}
    </>
  );
});

export default Tasks;
