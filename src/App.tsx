import Header from "./components/Header/Header";
import ClientRoutes from "./components/ClientRoutes/ClientRoutes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const App = ():JSX.Element => {

    return (
      
      <>
        <Header />
        <ClientRoutes />
        <ToastContainer />
      </>
    );
  };