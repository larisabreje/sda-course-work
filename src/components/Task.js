import { useParams } from 'react-router-dom';

const Task = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      {id}
      <h1>dsadsads</h1>
    </div>
  );
};

export default Task;
