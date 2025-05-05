import { createContext,useState,useContext } from "react";

const AppContext = createContext()
export const AppProvider = ({children}) =>{
    const [isSidebarOpen,setisSidebarOpen] = useState(false)
    const [isModalOpen,setisModalOpen]=useState(false)
    const OpenSidebar = () =>{
        setisSidebarOpen(true)
    }
    const OpenModal = () =>{
        setisModalOpen(true)
    }
    const CloseSidebar = () =>{
        setisSidebarOpen(false)
    }
    const CloseModal = () =>{
        setisModalOpen(false)
    }
    return <AppContext.Provider value={{
        isSidebarOpen,isModalOpen,OpenModal,OpenSidebar,CloseModal,CloseSidebar
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalCOntext = () =>{
    return useContext(AppContext)
}