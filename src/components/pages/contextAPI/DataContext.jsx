import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const Provider = ({ children }) => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function alldatas() {
      const response = await axios.get(
        "https://dummyjson.com/products"
      );

      setAllData(response.data.products);
    }

    alldatas();
  }, []);

  return (
    <DataContext.Provider value={{ allData }}>
      {children}
    </DataContext.Provider>
  );
};
