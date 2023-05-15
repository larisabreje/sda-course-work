import "./styles/delete.css";
import { globalContext } from "./context/Context";
import { useContext } from "react";
const DeleteCard = () => {
  const { modalState, tasks, deleteId } = useContext(globalContext);
  const [deleteTask] = deleteId;

  const [addNewTask, setAddNewTask] = tasks;

  const [, setStateModal] = modalState;
  const removeElement = () => {
    setAddNewTask(addNewTask.filter((item) => item.id !== deleteTask));
    localStorage.setItem("data", JSON.stringify(addNewTask));
  };
  return (
    <div className="deleteModal">
      <div className="title">Are you sure you want to delete the task?</div>
      <div className="buttons">
        <button className="confirm" onClick={removeElement}>
          Confirm
        </button>
        <button className="reject" onClick={() => setStateModal(false)}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default DeleteCard;
