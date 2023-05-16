import './styles/createTasks.css';
import { globalContext } from './context/Context';
import { useState, useContext, useEffect } from 'react';

const EditTask = () => {
  const { tasks, modalState, taskId } = useContext(globalContext);
  const [addNewTask, setAddNewTask] = tasks;
  const [modalStatee, setModalState] = modalState;
  const [idTask] = taskId;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');
  const [details, setDetails] = useState('');


  const editTask = async () => {
    const res = await addNewTask.map(obj => {
        if (obj.id === idTask) {
      return {...obj,   title: title,
            description: description,
            dueDate:dueDate,
            status:status,
            details:details,
            }
        }
        return obj; 
      });
      localStorage.setItem('data', JSON.stringify(res));
      setAddNewTask(res);
      setModalState(false)
  };
  useEffect(() => {
    addNewTask.filter(item => {
      if (item.id === idTask) {
        setTitle(item.title);
        setDescription(item.description);
        setDetails(item.details);
        setStatus(item.status);
        setDueDate(item.dueDate);
      }
      return null ;
    });
  }, [modalStatee]);

  return (
    <div className="createTaskDiv">
      <span>Title:</span>
      <input
        type="text"
        name="title"
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
      />
      <span>Description:</span>
      <input
        type="text"
        name="description"
        value={description}
        onChange={e => {
          setDescription(e.target.value);
        }}
      />
      <span>Due Date: </span>
      <input
        type="date"
        name="dueDate"
        value={dueDate}
        onChange={e => {
          setDueDate(e.target.value);
        }}
      />
      <span>Status: </span>
      <input
        type="text"
        name="status"
        value={status}
        onChange={e => {
          setStatus(e.target.value);
        }}
      />
      <span>Details: </span>
      <textarea
        name="details"
        rows={4}
        cols={40}
        value={details}
        onChange={e => {
          setDetails(e.target.value);
        }}
      />

      <button onClick={editTask}>Edit Task</button>

    </div>
  );
};

export default EditTask;
