import { useState, useCallback, useEffect } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";

const ModifyTask = ({ onModify, eachTask }) => {
  const [text, setText] = useState(eachTask.text);
  const [date, setDate] = useState(eachTask.date);
  const [reminder, setReminder] = useState(eachTask.reminder);
  const [showModify, setShowModify] = useState(false);
  const [id ,setId] = useState(eachTask.id);
 // console.log("ModifyTask() eachTask:", eachTask);

  const showModifyForm =() => {
    setShowModify(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();

  //  console.log("onSubmit() e", e);

    if (!text) {
      alert("please add a task!");
      return;
    }
    onModify({ text, date, reminder ,id ,eachTask}); //onModify 라는 객체에 해당 데이터들을 전달해 줍니다.

    // setText("");
    // setDate("");
    // setReminder(false);
  };

  useEffect(() => {
  //   console.log(text,date,reminder);
 
  },[text,date,reminder]);



  return (
    <div>
      <HiOutlinePencilAlt className="modify_icon" onClick={showModifyForm} />
      
      <div>
       { showModify && 
       <form className="modify-form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder={text}
            value={text}
            onChange={(e)=> setText(e.target.value)}
          />
          <input
            type="text"
            placeholder={date}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
           {/* <input
          value={eachTask.reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />  */}
          <input type="submit" value="Modify" className="btn btn-block" />
        </form>
        }
        </div>
      
    </div>
  );
};

export default ModifyTask;
