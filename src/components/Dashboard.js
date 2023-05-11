import React, { useEffect, useState, useContext } from 'react';
import Card from './Card';
import CreateTask from './CreateTask';
import './styles/dashboard.css';
import Footer from './Footer';
import { globalContext } from './context/Context';

const DashBoard = () => {
  const { tasks } = useContext(globalContext);
  const [data, setData] = tasks;
  const [search, setSearch] = useState('');
  const [filterState, setFilterState] = useState([]);

  useEffect(() => {
    setFilterState(
      data.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [data, search]);

  const addNewTask = newTask => {
    setData(oldData => [...oldData, newTask]);
  };

  return (
    <div className="main">
      <div className="navBar">
        <input
          type="search"
          value={search}
          name="search"
          onChange={e => setSearch(e.target.value)}
          className="seachInput"
          placeholder="Search some ..."
        />
      </div>

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
                  click={`/task/${item.id}`}
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
                  click={`/task/${item.id}`}
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
};

export default DashBoard;
