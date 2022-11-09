import { Routes, Route } from "react-router-dom"
import HomePage from "../../Pages/HomePage/HomePage"
import LoginPage from "../../Pages/LoginPage/LoginPage"
import NotesPage from "../../Pages/NotesPage/NotesPage"
import RegisterPage from "../../Pages/RegisterPage/RegisterPage"
import PablickRoute from "./PablicRoute/PablicRoute"



const ClientRoutes = ():JSX.Element => {

    return(

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<PablickRoute />}>
                <Route path="/notes" element={<NotesPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/register" element={<RegisterPage />} />
            </Route>
        </Routes>
    )
}


export default ClientRoutes