import React, { createContext, useRef } from "react";

export const ToastContext = createContext();

export const ToastContextProvider = (props) => {
    const toast = useRef(null);
    const showToast = (severityValue, summaryValue, detailValue) => {
        toast.current.show({ severity: severityValue, summary: summaryValue, detail: detailValue });
    }
    return (
        <ToastContext.Provider
            value={{
                showToast,
                toast
            }}
        >
            {props.children}
        </ToastContext.Provider>
    );
};