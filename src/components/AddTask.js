import { useState, useCallback } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  console.log("add task() onAdd", onAdd);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("please add a task!");
      return;
    }
    console.log("AddTask() onSubmit");

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-fotm" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="add task "
          value={text}
          onChange={useCallback((e) => setText(e.target.value), [])}
        />
      </div>
      <div className="form-control">
        <label>DAY and TIME</label>
        <input
          type="date"
          placeholder="add date"
          value={day}
          onChange={useCallback((e) => setDay(e.target.value), [])}
        />
      </div>
      <div className="form-control form-control-check">
        <label>setting Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={useCallback(
            (e) => setReminder(e.currentTarget.checked),
            []
          )}
        />
      </div>
      <input type="submit" value="SAVE" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
