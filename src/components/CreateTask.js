import "./styles/createTasks.css";
import { globalContext } from "./context/Context";
import { useState, useContext } from "react";

const CreateTask = () => {
  const { tasks } = useContext(globalContext);
  const [addNewTask, setAddNewTask] = tasks;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("");
  const [details, setDetails] = useState("");

  const createNewTask = (event) => {
    event.preventDefault();
    let max = 0;
    addNewTask.map((item) => {
      if (item.id > max) {
        max = item.id;
      }
    });
    const newTask = {
      id: max + 1,
      title: title,
      status: status,
      dueDate: new Date(dueDate),
      description: description,
      details: details,
    };
    console.log("A new task was created");
    setAddNewTask((prev) => [...prev, newTask]);
  };

  return (
    <div className="createTaskDiv">
      <span>Title:</span>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <span>Description:</span>
      <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <span>Due Date: </span>
      <input
        type="date"
        name="dueDate"
        value={dueDate}
        onChange={(e) => {
          setDueDate(e.target.value);
        }}
      />
      <span>Status: </span>
      <input
        type="text"
        name="status"
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      />
      <span>Details: </span>
      <textarea
        name="details"
        rows={4}
        cols={40}
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
        }}
      />

      <button onClick={createNewTask}>Add Task</button>
    </div>
  );
};

export default CreateTask;
