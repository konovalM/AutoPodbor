import React, {useContext, useState} from "react";


const ModalContext = React.createContext()




export const ModalContextProvider = ({children}) => {
    const [show,setShow] = useState(false)
    const [fullName ,setFullName] = useState("")
    const [telephone ,setTelephone] = useState("")

    return (
        <ModalContext.Provider value={{
            show,
            setShow,
            fullName,
            telephone,
            setFullName,
            setTelephone
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () =>{
    return useContext(ModalContext)
}

