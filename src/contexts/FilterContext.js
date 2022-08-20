import React, {useContext, useReducer} from "react";

const initialState = {
    activeFilter: null,
}

const FilterContext = React.createContext(initialState)


export const CLEAR_FILTER = 'CLEAR_FILTER'
export const SET_FILTER = 'SET_FILTER'

const reducer = (state = initialState, action) => {
    switch (action.type){
        case SET_FILTER:
            return {activeFilter: action.payload}
        case CLEAR_FILTER:
            return {...initialState}
        default:{
            return {
                ...initialState
            }
        }
    }
}

export const FilterContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <FilterContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () =>{
    return useContext(FilterContext)
}