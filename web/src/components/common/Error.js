import React, { createContext, useState } from "react";
import style from "../../styles/Error.module.css";

export const ErrorContext = createContext();
export function Error(props) {
    const [ errorMessage, setErrorMessage] = useState('');

    if (errorMessage) {
        return <p className={style.Error}>🙇{errorMessage}🙇</p>
        
    }
    else {
        return (
            <ErrorContext.Provider value={{ errorMessage, setErrorMessage }}>
                {props.children}
            </ErrorContext.Provider>
        );
    }
}