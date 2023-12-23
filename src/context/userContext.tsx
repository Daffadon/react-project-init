import { createContext, useContext, useState } from "react";
import { UserContextValue, userType } from "../data/dto/contextProps.ts";
import ChildrenProps from "../data/dto/childrenProps.ts";

const userContext = createContext<UserContextValue>({
  user: null,
  token: null,
  setUser: () => {},
  setTokenToLocal: () => {},
});

const ContextProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [user, setUser] = useState<userType | null>(null);
  const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setTokenToLocal = (token: string) => {
    setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <userContext.Provider value={{ user, token, setUser, setTokenToLocal }}>
      {children}
    </userContext.Provider>
  );
};

export default ContextProvider;

export const useUserContext = () => useContext(userContext);
