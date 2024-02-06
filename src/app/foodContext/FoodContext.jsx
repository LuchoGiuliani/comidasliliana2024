"use client";
import {createContext, useContext, useState} from "react";

const FoodContext = createContext();

export const useFoodContext = () => {
  return useContext(FoodContext);
};

export function FoodProvider({children}) {
  const [menu, setMenu] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const updateMenu = (newMenu) => {
    setMenu(newMenu);
  };

  const updateSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <FoodContext.Provider value={{menu, selectedCategory, updateMenu, updateSelectedCategory}}>
      {children}
    </FoodContext.Provider>
  );
}
