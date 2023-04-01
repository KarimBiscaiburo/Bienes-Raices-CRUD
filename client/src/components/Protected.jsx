import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Protected() {
    const auth = useSelector( state => state.auth.login );
    
    if(auth === false) {
        return <Navigate to="/login" replace />
    }

    return <Outlet />;
}

export default Protected;