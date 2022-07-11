import React, {useContext, useReducer} from "react";
import {postFeedback} from "../api/feedbackAPI";


const ModalContext = React.createContext()

const initialState={
    isOpen:false,
    formValues:{
        telephone:"",
        name:"",
        details: '',
    },
    count:1,
    formTitle: 'Остались вопросы?',
}


export const OPEN_MODAL="OPEN_MODAL"
export const CLOSE_MODAL="CLOSE_MODAL"
export const UPLOAD_AND_NEXT_MODAL = "UPLOAD_AND_NEXT_MODAL"

const reducer = (state = initialState,action) => {
    switch(action.type){
        case OPEN_MODAL:{
            return {
                ...state,
                formValues: {...state.formValues, details: action.payload.title},
                isOpen: true,
                count: 1,
                formTitle: action.payload.formTitle
            }
        }
        case CLOSE_MODAL:{
            return {
                ...initialState,
                isOpen: false
            }
        }

        case UPLOAD_AND_NEXT_MODAL:
            (async ()=>{
                await postFeedback({...action.payload, details: state.formValues.details})
            })()

            return {
                ...state,
                count: 2
            }
        default:{
            return {
                ...initialState
            }
        }
    }
}




export const ModalContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <ModalContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () =>{
    return useContext(ModalContext)
}

