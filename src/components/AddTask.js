import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!text) {
      alert("add a task!");
      return;
    }

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
          onChange={(e) => setText(e.currentTarget.value)}
        />
      </div>
      <div className="form-control">
        <label>DAY and TIME</label>
        <input
          type="date"
          placeholder="add date"
          value={day}
          onChange={(e) => setDay(e.currentTarget.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>setting Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="SAVE" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
