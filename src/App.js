// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import CreateTask from './components/CreateTask';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filterState, setFilterState] = useState([]);

  async function getData() {
    const res = await fetch('./data.json');
    const response = await res.json();
    setData(response);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilterState(
      data.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search.length > 3, data]);

  const addNewTask = newTask => {
    setData(oldData => [...oldData, newTask]);
  };
  return (
    <div className="main">
      <input
        type="search"
        value={search}
        name="search"
        onChange={e => setSearch(e.target.value)}
      />

      <div className="container">
        <div className="cardList">
          {filterState.length > 0 ? (
            filterState.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  status={item.status}
                  description={item.description}
                  dueDate={new Date(item.dueDate)}
                />
              );
            })
          ) : filterState.length === 0 && search.length > 0 ? (
            <h1>Nothing was found !!!</h1>
          ) : (
            data.map((item, index) => {
              return (
                <Card
                  key={index}
                  title={item.title}
                  status={item.status}
                  description={item.description}
                  dueDate={new Date(item.dueDate)}
                />
              );
            })
          )}
        </div>
        <CreateTask addNewTask={addNewTask} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
