import React, { createContext, useReducer, useState } from "react";
import { getCurrentUser } from "../getcurrentuser";

const user = getCurrentUser();
const INITIAL_STATE = {
  user
}

export const AuthContext = createContext();

const reducer = () => {
  
}

export const AuthProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  // console.log(state.user)

  return (
    <AuthContext.Provider value={{ currentUser: state.user }}>
      {children}
    </AuthContext.Provider>
  );
};






































// import React, { createContext, useReducer } from "react";

// const storedUser = localStorage.getItem("user");
// const INITIAL_STATE = {
//   currentUser: storedUser ? JSON.parse(storedUser) : null,
// };

// export const AuthContext = createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//       const user = action.payload;
//       localStorage.setItem("user", JSON.stringify(user));
//       return {
//         ...state,
//         currentUser: user,
//       };
//     case "LOGOUT":
//       localStorage.removeItem("user");
//       return {
//         ...state,
//         currentUser: null,
//       };
//     default:
//       return state;
//   }
// };

// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

//   return (
//     <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
