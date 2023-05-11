import React, { useContext } from 'react';
import Card from './Card';
import CreateTask from './CreateTask';
import './styles/dashboard.css';
import Footer from './Footer';
import { globalContext } from './context/Context';

const DashBoard = () => {
  const { tasks, search, filteredTasks, modalState, modalType } = useContext(globalContext);
  const [data] = tasks;
  const [searchInput, setSearchInput] =search;
  const [filterState] = filteredTasks
  const [stateModal, setStateModal] = modalState
  const  [typeModal, setTypeModal] = modalType

  const openCreateTaskModal = () => {
    setStateModal(true);
    setTypeModal("CREATE TASK")
  }
  return (
    <div className="main">
      <div className="navBar">
        <input
          type="search"
          value={searchInput}
          name="search"
          onChange={e => setSearchInput(e.target.value)}
          className="seachInput"
          placeholder="Search some ..."
        />
      </div>
      <button onClick={openCreateTaskModal}>Create Task</button>
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
   
      </div>
      <Footer />
    </div>
  );
};

export default DashBoard;
