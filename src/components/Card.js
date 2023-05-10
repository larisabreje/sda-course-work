import './styles/card.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Card = props => {
  const [complete, setComplete] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {complete ? (
        <></>
      ) : (
        <div className="card" id={props.id} onClick={() => navigate(props.click)}>
          <div className="card-title"> {props.title}</div>
          <div className="card-status">
            <span>{props.status}</span>
          </div>
          <div className="card-description">{props.description}</div>
          <div className="card-date">
            {props.dueDate.toLocaleDateString('en-US')}
          </div>
          <div className="card-checkbox">
            <input
              type="checkbox"
              id="myCheckbox"
              onChange={e => setComplete(true)}
            />
            <label for="myCheckbox">Mark as completed</label>
          </div>
        </div>
      )}
    </>
  );
};
export default Card;
