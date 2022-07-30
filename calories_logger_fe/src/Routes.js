import {
    BrowserRouter as Router,
    Route,
    Routes as Switch,
    Navigate,
} from 'react-router-dom';
import PrivateRoute from './Components/PrivateRoute';
import Login from './Views/Login';
import SignIn from './Views/Signin';
import NuevaCaloria from './Views/Calorias/NuevaCaloria';
import Calorias from './Views/Calorias/Calorias';
import Resumen from './Views/Calorias/Resumen';
import OlvidePassword from './Views/Password/OlvidePassword';
import CambiarPassword from './Views/Password/CambiarPassword';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/olvide-password" element={<OlvidePassword />} />
                <Route path="/cambiar-password/:token" element={<CambiarPassword />} />

                <Route
                    path="/home"
                    element={
                        <PrivateRoute>
                            {/* <Summary /> */}
                            <Resumen />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/calorias"
                    element={
                        <PrivateRoute>
                            <Calorias />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/nueva-caloria"
                    element={
                        <PrivateRoute>
                            <NuevaCaloria />
                        </PrivateRoute>
                    }
                />
                
            </Switch>
        </Router>
    );
};

export default Routes;
