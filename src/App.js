import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import Test2 from './components/Test2';
import React, { useState } from 'react';
import { abc } from './components/Test2';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    {
      title: 'Task 1',
      status: 'In progress',
      description: 'Bla bla bla',
      date: '25/08/2023',
    },
    {
      title: 'Task 2',
      status: 'In progress',
      description: 'Bla bla bla',
      date: '25/08/2023',
    },
    {
      title: 'Task 3',
      status: 'In progress',
      description: 'Bla bla bla',
      date: '25/08/2023',
    },
    {
      title: 'Task 4',
      status: 'In progress',
      description: 'Bla bla bla',
      date: '25/08/2023',
    },
    {
      title: 'Task 5',
      status: 'In progress',
      description: 'Bla bla bla',
      date: '25/08/2023',
    },
    {
      title: 'Task 6',
      status: 'In progress',
      description: 'Bla bla bla',
      date: '25/08/2023',
    },
  ]);
  return (
    <div className="App">
      {data && data?.map((item,index) => {
        return (
          <Card key={index} title={item.title} status={item.status} description={item.description} date={item.date}/>
        )
      })}
    </div>
  );
}

export default App;
