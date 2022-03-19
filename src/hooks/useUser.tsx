import React, { createContext, useContext, useState } from "react";
import { Place, UserContextProps } from "./interface";

export const UserContext = createContext<UserContextProps>({
  places: [],
  addPlace: () => {},
  removePlace: () => {}
});

export const UserContextProvider = ({ children }) => {
  const [places, setPlaces] = useState<Place[]>([]);

  function addPlace(city: string, subtitle :string, highlight: string) {
    setPlaces([
      ...places,
      {
        id: String(Math.random() * new Date().getMilliseconds()),
        title: city,
        subtitle,
        highlight: `${highlight}°`
      }
    ])
  }

  function removePlace(id: string) {
    setPlaces(places.filter(item => item.id !== id));
  }

  return (
    <UserContext.Provider value={{ places, addPlace, removePlace }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
}
