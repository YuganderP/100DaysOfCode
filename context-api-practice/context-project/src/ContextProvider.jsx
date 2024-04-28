import React from "react";
import UserContext from '../userContext'

const UserContextProvider =({children})=>{
    const [count,setCount]=React.useState(0)
    return (
        <UserContext.Provider value={{count,setCount}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider