import DeleteTask from "./DeleteTask";
import ModifyTask from "./ModifyTask"
const EachTask = ({ eachTask, onDelete, onToggle,onModify }) => {

  return (
    <div
      className={`task ${eachTask.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(eachTask.id)}
    >
      {eachTask.text}
      <h2>
        <DeleteTask
          onDelete={onDelete}      
          eachTask={eachTask}
        />
      </h2>
      <h3>
        <ModifyTask 
        onModify={onModify}
        eachTask={eachTask}
        />
      </h3>

      <p>{eachTask.date}</p>
    </div>
  );
};

export default EachTask;
