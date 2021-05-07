import { memo } from "react";
import { RiDeleteBackLine } from "react-icons/ri";

const DeleteTask = ({ onDelete, dataId ,eachTask}) => {
  console.log('DeleteTask() id : ',eachTask.id);
  return (
    <div>
      <RiDeleteBackLine
        className="delete_icon"
        onClick={()=>onDelete(eachTask.id)}
      />
    </div>
  );
};

export default DeleteTask;
