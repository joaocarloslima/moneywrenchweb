"use client"

import { apiLogin } from "@/actions/user";

const { createContext, useState } = require("react");

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [ user, setUser ] = useState(null)

    const login = (email, senha) => {
        if(email === "joao@fiap.com.br"){
            setUser({
                email,
                name: email
            })
            apiLogin(email, senha)
        }
    }

    const logout = () => setUser(null)


    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}