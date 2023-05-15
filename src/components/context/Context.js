import { createContext } from "react";
import { useState, useEffect } from "react";
export const globalContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filterState, setFilterState] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const lsData = JSON.parse(localStorage.getItem("data")) || [];

  async function getData() {
    const res = await fetch("../data.json");
    const response = await res.json();

    if (lsData.length > data.length) {
      setData(lsData);
    } else {
      setData(response);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (lsData.length < data.length)
      localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

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
        modalType: [modalType, setModalType],
        deleteId: [deleteId, setDeleteId],
      }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default Context;
