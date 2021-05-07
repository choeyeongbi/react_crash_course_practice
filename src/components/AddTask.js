import { useState, useCallback } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  console.log("add task() onAdd", onAdd);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("please add a task!");
      return;
    }
    console.log("AddTask() onSubmit");

    onAdd({ text, date, reminder });

    setText("");
    setDate("");
    setReminder(false);
  };

  return (
    <>
      <form className="add-fotm" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="add task "
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>DAY and TIME</label>
          <input
            type="text"
            placeholder="add date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>setting Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={ (e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" value="SAVE" className="btn btn-block" />
      </form>
      <br />
      <hr />
      <br />
    </>
  );
};

export default AddTask;
