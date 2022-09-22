import { Navigate, Outlet } from "react-router-dom";
//import { AboutContact, Reporte, Admin } from "../pages/Messages"

export const ProtectedRoute = ({ isAllowed, redirectTo = "/notfound", children, msje }) => {
    console.log(msje)
    // if (msje === "about-contact") {
    //     return <AboutContact />
    // }
    // if (msje === "reporte") {
    //     return <Reporte />
    // }
    // if (msje === "admin") {
    //     return <Admin />
    // }

     if (!isAllowed) {
         return <Navigate to={redirectTo} replace />;
     }

    //outlet= N rutas / children= 1 ruta
    return children ? children : <Outlet />;
};