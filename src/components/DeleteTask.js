import { memo } from "react";
import { RiDeleteBackLine } from "react-icons/ri";

const DeleteTask = memo(({ onDelete, dataId }) => {
  return (
    <div>
      <RiDeleteBackLine
        className="delete_icon"
        onClick={() => onDelete(dataId)}
      />
    </div>
  );
});

export default DeleteTask;
