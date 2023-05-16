import './styles/delete.css';
import { globalContext } from './context/Context';
import { useContext } from 'react';
const DeleteCard = () => {
  const { modalState, tasks, taskId } = useContext(globalContext);
  const [deleteTask] = taskId;

  const [addNewTask, setAddNewTask] = tasks;

  const [, setStateModal] = modalState;
  const removeElement = async () => {
    const res = await addNewTask.filter(item => item.id !== deleteTask);
    localStorage.setItem('data', JSON.stringify(res));
    setAddNewTask(res);
    setStateModal(false);
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
