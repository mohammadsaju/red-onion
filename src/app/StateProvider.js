import { createContext, useReducer, useContext } from "react";

//this is the data layer
export const StateContext = createContext();

//build a data provider
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer( reducer,initialState)}>
        {children}
    </StateContext.Provider>
) 

export const useStateValue = () => useContext(StateContext)