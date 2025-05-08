import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) =>{
    const [isDarkTheme,setisDarkTheme] = useState(false)
    const [searchterm,setsearchterm] = useState('cat')
    const toggleDarkTheme = () =>{
        const newDarkTheme = !isDarkTheme
        setisDarkTheme(newDarkTheme)
       const body = document.querySelector('body')
       body.classList.toggle('dark-theme',newDarkTheme)
    }

    return (
        <AppContext.Provider value={{isDarkTheme,toggleDarkTheme,setsearchterm,searchterm}}>{children}</AppContext.Provider>
    )

} 
export const useGlobalContext = () => useContext(AppContext)