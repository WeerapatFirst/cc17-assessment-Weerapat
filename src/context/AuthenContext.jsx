/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import * as userAPI from '../apis/userApi'


export const AuthenContext = createContext();

export default function AuthenContextProvider ({children}) {
  const [user, setUser] = useState(null);


  const login = async (email, password) => {
    try {
      const reponse = await userAPI.getUserById(email, password);
      setUser(reponse.data)
    } catch (error) {
      setUser(null);
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
  }
  return <AuthenContext.Provider value={{user, login, logout}}>{children}</AuthenContext.Provider>


}