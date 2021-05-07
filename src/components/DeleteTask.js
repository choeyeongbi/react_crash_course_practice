import { memo } from "react";
import { RiDeleteBackLine } from "react-icons/ri";

const DeleteTask = ({ onDelete,eachTask}) => {

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
