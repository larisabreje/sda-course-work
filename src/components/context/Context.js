import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const globalContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filterState, setFilterState] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  async function getData() {
    const res = await fetch('../data.json');
    const response = await res.json();
    setData(response);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilterState(
      data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [data, search]);

  return (
    <globalContext.Provider
      value={{
        tasks: [data, setData],
        filteredTasks: [filterState, setFilterState],
        search: [search, setSearch],
        modalState: [modalIsOpen, setIsOpen],
        modalType: [modalType, setModalType]

      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default Context;
