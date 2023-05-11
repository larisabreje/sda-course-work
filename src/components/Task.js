import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/singleTask.css';

const Task = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  async function getData() {
    const res = await fetch('../data.json');
    const response = await res.json();
    setData(response.filter(item => item.id == id));
  }

  useEffect(() => {
    getData();
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
