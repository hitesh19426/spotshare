import { createContext } from "react";

export const AuthContext = createContext({
    isLogedIn: false,
    userId: '',
    login: () => {},
    logout: () => {},
})