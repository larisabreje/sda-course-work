import { createContext } from 'react';
import { useState, useEffect } from 'react';

export const globalContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  async function getData() {
    const res = await fetch('../data.json');
    const response = await res.json();
    setData(response);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <globalContext.Provider value={{ tasks: [data, setData] }}>
      {children}
    </globalContext.Provider>
  );
};

export default Context;
