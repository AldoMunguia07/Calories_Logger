import { Link } from 'react-router-dom';
import Page from '../../Components/Page';
import { Field } from '../../Components/InputField';
import Alerta from '../../Components/Alerta';

const LoginInUx = ({
    emailValue = '',
    passwordValue = '',
    error = '',
    alerta,
    onChangeHandler = () => {},
    onSignInClick = () => {},
    onLoginClick = () => {},
}) => {
    return (
        <Page
            showNavBar={true}
            useAbsoluteCenter={true}
            pageTitle="Iniciar Sesión"
        >
            <h1 className="titulo-login">Calories Logger</h1>

            {alerta.error && <Alerta alerta={alerta} />}

            <form style={{ minWidth: '380px', maxWidth: '640px' }}>
                <Field
                    name="email"
                    labelText="Correo Electrónico"
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={emailValue}
                    onChange={onChangeHandler}
                />
                <Field
                    name="password"
                    labelText="Contraseña"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={passwordValue}
                    onChange={onChangeHandler}
                />

                <div className="botones">
                    <button onClick={onLoginClick}>Iniciar Cuenta</button>
                </div>
            </form>
            <nav>
                <Link className="crear-cuenta" to="/signin">
                    ¿No tienes cuenta? Comienza Creando Una.
                </Link>

                <Link className="crear-cuenta" to="/olvide-password">
                    Olvidé mi Password
                </Link>
            </nav>
        </Page>
    );
};
export default LoginInUx;
