import React, { createContext, useContext, useReducer } from "react";

// Preparing the data layder - Chuẩn bị lớp dữ liệu
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Hook which allows us to pull information from the data layer
// Hook cho phép chúng ta lấy thông tin từ dữ liệu
export const useStateValue = () => useContext(StateContext);
