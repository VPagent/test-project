import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"



const PrivateRoute = () => {
    // const token = useSelector(state => state.auth.token)
    const token = false

    return token ? <Navigate to="/"/> : <Outlet/>
}

export default PrivateRoute