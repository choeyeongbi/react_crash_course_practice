import DeleteTask from "./DeleteTask";
import { memo } from "react";
const EachTask = memo(({ eachTask, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${eachTask.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(eachTask.id)}
    >
      {eachTask.id}
      <h3>
        {eachTask.text}{" "}
        <h2>
          <DeleteTask
            onDelete={onDelete}
            dataId={eachTask.id}
            eachTask={eachTask}
          />
        </h2>
      </h3>
      <p>{eachTask.day}</p>
    </div>
  );
});

export default EachTask;
