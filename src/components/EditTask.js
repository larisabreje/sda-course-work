import './styles/createTasks.css';
import { globalContext } from './context/Context';
import { useState, useContext, useEffect } from 'react';

const EditTask = () => {
  const { tasks, modalState, taskId } = useContext(globalContext);
  const [addNewTask, setAddNewTask] = tasks;
  const [modalStatee, setModalState] = modalState;
  const [idTask] = taskId;

  const [title, setTitle] = useState('');
  const [id, setId] = useState(null);
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    addNewTask.filter(item => {
      if (item.id === idTask) {
        setId(item.id);
        setTitle(item.title);
        setDescription(item.description);
        setDetails(item.details);
        setStatus(item.status);
        setDueDate(item.dueDate);
      }
      return null;
    });
  }, [modalStatee]);

  // const createNewTask = event => {
  //   event.preventDefault();
  //   let max = 0;
  //   addNewTask.map(item => {
  //     if (item.id > max) {
  //       max = item.id;
  //     }
  //   });
  //   const newTask = {
  //     id: max + 1,
  //     title: title,
  //     status: status,
  //     dueDate: new Date(dueDate),
  //     description: description,
  //     details: details,
  //   };
  //   console.log('A new task was created');
  //   setAddNewTask(prev => [...prev, newTask]);
  //   setModalState(false);
  // };

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

      <button onClick={() => {}}>Add Task</button>
    </div>
  );
};

export default EditTask;
