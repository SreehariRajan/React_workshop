import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const ContextProvider = (props) => {
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    return (
        <UserContext.Provider
            value={{
                nameState: [name, setName],
                jobState: [job, setJob]
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};