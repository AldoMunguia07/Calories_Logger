import { useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../Header';
import SideBar from '../SideBar';

const PrivateRoute = ({ children }) => {
    let nameUser = null;
    const user = useSelector((state) => state.security);
    if (user) {
        try {
            const { token } = user;
            const decoded = jwtDecode(token);
            const expired = decoded.exp * 1000 < new Date().getTime();
            if (expired) {
                return <Navigate to="/login" replace />;
            }
            nameUser = decoded.jwtUser.nombre;
            //console.log(decoded);
        } catch (ex) {
            return <Navigate to="/login" replace />;
        }
    } else {
        return <Navigate to="/login" replace />;
    }
    return children ? (
        <>
            <Header usuario={`${nameUser}`} />

            <div className="flex-layout">
                <SideBar />
                <main className="principal">{children}</main>
            </div>
        </>
    ) : (
        <Outlet />
    );
};

export default PrivateRoute;
