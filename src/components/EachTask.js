import DeleteTask from "./DeleteTask";

const EachTask = ({ eachTask, onDelete, onToggle }) => {

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

      <p>{eachTask.date}</p>
    </div>
  );
};

export default EachTask;
