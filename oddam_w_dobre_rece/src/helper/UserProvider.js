import React, {useEffect, useState} from "react";
// import {supabase} from "./supabaseClient";

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    const [user] = useState(null);
    useEffect(() => {
    }, [])
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => React.useContext(UserContext);