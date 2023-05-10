// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Card from './components/Card';
import CreateTask from './components/CreateTask';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0);
  const [data, setData] = useState([
    {
      title: 'Task 1',
      status: 'In progress',
      description: 'Bla bla bla',
      dueDate: new Date('12 24, 22'),
    },
    {
      title: 'Task 2',
      status: 'In progress',
      description: 'Bla bla bla',
      dueDate: new Date('12 24, 22'),
    },
    {
      title: 'Task 3',
      status: 'In progress',
      description: 'Bla bla bla',
      dueDate: new Date('12 24, 22'),
    },
    {
      title: 'Task 4',
      status: 'In progress',
      description: 'Bla bla bla',
      dueDate: new Date('12 24, 22'),
    },
    {
      title: 'Task 5',
      status: 'In progress',
      description: 'Bla bla bla',
      dueDate: new Date('09 14, 22'),
    },
    {
      title: 'Task 6',
      status: 'In progress',
      description: 'Bla bla bla',
      dueDate: new Date('12 24, 22'),
    },
  ]);

  const addNewTask = newTask => {
    setData(oldData => [...oldData, newTask]);
  };
  return (
    <div className="main">
      <div className="container">
        <div className="cardList">
          {data.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                status={item.status}
                description={item.description}
                dueDate={item.dueDate}
              />
            );
          })}
        </div>
        <CreateTask addNewTask={addNewTask} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
