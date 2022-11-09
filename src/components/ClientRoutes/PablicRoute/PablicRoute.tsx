import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"



const  PablickRoute = () => {
    // const token = useSelector(state => state.auth.token)
    const token = true

    return token ? <Outlet/> : <Navigate to="/login"/> 
    
}

export default PablickRoute