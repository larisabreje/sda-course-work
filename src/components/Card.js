import './styles/card.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { globalContext } from './context/Context';
const Card = props => {
  const { modalState, modalType, taskId } = useContext(globalContext);
  const navigate = useNavigate();
  const [, setStateModal] = modalState;
  const [, setTypeModal] = modalType;
  const [, setDeleteId] = taskId;
  const openDeleteTaskModal = () => {
    setStateModal(true);
    setTypeModal('DELETE TASK');
    setDeleteId(props.id);
  };
  const openEditTaskModal = () => {
    setStateModal(true);
    setTypeModal('EDIT TASK');
    setDeleteId(props.id);
  };
  return (
    <div className="card">
      <div className="editdeleteSection">
        <span className="delete" onClick={openEditTaskModal}>
          Edit
        </span>
        <span className="delete" onClick={openDeleteTaskModal}>
          X
        </span>
      </div>
      <hr />
      <div className="card-content" id={props.id}>
        <div className="card-title"> {props.title}</div>
        <div className="card-status">
          <span>{props.status}</span>
        </div>
        <div className="card-description">{props.description}</div>
        <div className="card-date">
          {props.dueDate.toLocaleDateString('en-US')}
        </div>
        {/* <div className="card-checkbox">
          <input type="checkbox" id="myCheckbox" />
          <label htmlFor="myCheckbox">Mark as completed</label>
        </div> */}
        <div className="card-details">
          <button onClick={() => navigate(props.click)}>
            Go to details &gt;&gt;
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
