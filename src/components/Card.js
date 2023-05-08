import './styles/card.css';

function Card(props) {
  return (
    <div className="card" >
      <div className="card-title"> {props.title}</div>
      <div className="card-status">
        <span>{props.status}</span></div>
      <div className="card-description">{props.description}</div>
      <div className="card-date">{props.date}</div>
      {props.specials ?
       <div className='card-special'>{props.specials}</div> :
       props.specials2 ? <div className='card-special2'>{props.specials2}</div> : <></>
         }
    </div>
  );
}

export default Card;
