import React, { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";

export const Ccontext = createContext();
const Cartcontex = ({ children }) => {
  const [drinksData, setDrinksdata] = useState([]);
  const [addedData, setaddedData] = useState([]);
  console.log(drinksData);
  const getdrinksData = (URL) => {
    axios.get(URL).then((response) => {
      setDrinksdata(response.data.drinks);
    });
  };
  useEffect(() => {
    getdrinksData(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );
  }, []);
  console.log(addedData);
  //   Add to cart
  const addtocart = (item) => {
    setaddedData([...addedData, item]);
  };

  return (
    <Ccontext.Provider value={{ drinksData, addtocart }}>
      {children}
    </Ccontext.Provider>
  );
};
export const Optcontext = () => {
  return useContext(Ccontext);
};
export default Cartcontex;
