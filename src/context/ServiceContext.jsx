import React, { createContext } from "react";

export const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  return (
    <ServiceContext.Provider value={{}}>
      {children}
    </ServiceContext.Provider>
  );
};
