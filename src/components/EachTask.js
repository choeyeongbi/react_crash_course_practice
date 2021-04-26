import DeleteTask from "./DeleteTask";
import { memo } from "react";
const EachTask = memo(({ eachTask, onDelete, onToggle }) => {
  console.log("EachTask() eachTask>", eachTask);

  return (
    <div
      className={`task ${eachTask.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(eachTask.id)}
    >
      {eachTask.text}
      <h2>
        <DeleteTask
          onDelete={onDelete}
          dataId={eachTask.id}
          eachTask={eachTask}
        />
      </h2>

      <p>{eachTask.day}</p>
    </div>
  );
});

export default EachTask;
