import { createContext, ReactNode, useContext, useState } from 'react';
import { User } from '../@types/user';

const context = createContext({} as UserContextType);

type UserContextProviderProps = {
  children: ReactNode,
};

type UserContextType = {
  user?: User,
  setUser: (user: User) => void;
};

export const UserContextProvider = ({
  children
}: UserContextProviderProps) => {
  const [user, setUser] = useState<User>();

  return (
    <context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </context.Provider>
  );
}

export const useUser = () => useContext(context);
