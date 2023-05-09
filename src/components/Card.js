import './styles/card.css';

function Card(props) {
  return (
    <div className="card">
      <div className="card-title"> {props.title}</div>
      <div className="card-status">
        <span>{props.status}</span>
      </div>
      <div className="card-description">{props.description}</div>
      <div className="card-date">{props.date.toLocaleDateString('en-US')}</div>
    </div>
  );
}

export default Card;
