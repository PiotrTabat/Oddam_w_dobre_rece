import React, {useEffect, useState} from "react";
import {supabase} from "./supabaseClient";

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            const user = await supabase.auth.getUser();
            setUser(user.data.user);
        }
        getUser();
    }, [])
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => React.useContext(UserContext);