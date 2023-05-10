import './styles/card.css';

const Card = props => {
  return (
    <div className="card" id={props.id}>
      <div className="card-title"> {props.title}</div>
      <div className="card-status">
        <span>{props.status}</span>
      </div>
      <div className="card-description">{props.description}</div>
      <div className="card-date">
        {props.dueDate.toLocaleDateString('en-US')}
      </div>
      <div className='card-checkbox'>
      <input type="checkbox" id="myCheckbox"></input>
      <label for="myCheckbox">Mark as completed</label>
      </div>
    </div>
  );
};
export default Card;
