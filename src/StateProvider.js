import React,{createContext,useContext,useReducer} from 'react'

//Data layer
export const StateContext = createContext();

//Build provider
export const StateProvider = ({reducer,initialState,children})=>{
  return (  <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
  )
}

//using it inside component
export const useStateValue = () =>useContext(StateContext)

