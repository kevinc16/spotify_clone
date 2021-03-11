import { createContext, useContext, useReducer, Dispatch } from "react";
import { IInitialState, Actions, reducer, initialState } from "./reducer";

interface IContextProps {
  state: IInitialState;
  dispatch: Dispatch<Actions>;
}

export const DataLayerContext = createContext({} as IContextProps);

export const DataLayer = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return (
    <DataLayerContext.Provider value={value}>
      {props.children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);
