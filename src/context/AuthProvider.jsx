import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [name, setName] = useState(() => {
        const dataStorage = localStorage.getItem('name');

        if (dataStorage) {
            return JSON.parse(dataStorage);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('name', JSON.stringify(name));
    }, [name]);

    const addName = (nick) => {
        const nameArray = [...name];
        const nameIndex = name.indexOf(nick);
        if (nameIndex >= 0) {
            nameArray.slice(nameIndex, 1)
        } else {
            nameArray.push(nick);
        };
        setName(nameArray);
    }

    const showMyName = async () => {
        return name;
    }

    const isName = () => {
        const verifyName = [...name];
        if (verifyName.length === 0) {
            return false;
        } else {
            return true;
        }
    }
 
    return (
        <AuthContext.Provider value={{ name: name, addName, showMyName, isName }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;