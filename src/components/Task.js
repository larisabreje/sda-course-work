import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './styles/singleTask.css';
import { globalContext } from './context/Context';

const Task = () => {
  const { tasks } = useContext(globalContext);
  const [data, setData] = tasks;
  const { id } = useParams();

  useEffect(() => {
    setData(data.filter(item => item.id == id));
  }, [id]);

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div className="container-single-task" key={index}>
            <div>{item.title}</div>
            <div>{item.status}</div>
            <div>{item.details}</div>
            <div>{new Date(item.dueDate).toLocaleDateString('ro-RO')}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
