import React, { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import { InitialStateType, UserActions } from "../models/reducerTypes";
import { reducer } from "../utils/reducer";

export const initialState: InitialStateType = {
  user: {
    firstname: "John",
    lastname: "Doe",
    email: "john@mail.com",
  },
};

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<UserActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const mainReducer = (state: InitialStateType, action: UserActions) =>
    reducer(state, action);
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// export const useUser = useContext(AppContext);
