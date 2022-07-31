import { Link } from 'react-router-dom';
import Page from '../../Components/Page';
import { Field } from '../../Components/InputField';
import Alerta from '../../Components/Alerta';

const SignInUx = ({
    emailValue = '',
    passwordValue = '',
    nombreValue,
    repetirPasswordValue,
    ocupacionValue,
    alerta,
    onChangeHandler = () => {},
    onSignInClick = () => {},
    onLoginClick = () => {},
}) => {
    return (
        <Page
            showNavBar={true}
            useAbsoluteCenter={true}
            pageTitle="Crear Cuenta"
        >
            <h1 className="titulo-login">Calories Logger</h1>
            {alerta.msg && <Alerta alerta={alerta} />}

            <form>
                <Field
                    name="nombre"
                    labelText="Nombre"
                    type="text"
                    value={nombreValue}
                    onChange={onChangeHandler}
                    placeholder="Ingresa tu Nombre"
                />

                <Field
                    name="ocupacion"
                    labelText="Ocupacion"
                    type="text"
                    value={ocupacionValue}
                    onChange={onChangeHandler}
                    placeholder="Ejm: Estudiante "
                />
                <Field
                    name="email"
                    labelText="Correo Electrónico"
                    type="email"
                    value={emailValue}
                    onChange={onChangeHandler}
                    placeholder="Ingresa tu correo"
                />
                <Field
                    name="password"
                    labelText="Contraseña"
                    type="password"
                    value={passwordValue}
                    onChange={onChangeHandler}
                    placeholder="Ingresa tu contraseña"
                />

                <Field
                    name="password2"
                    labelText="Repetir Contraseña"
                    type="password"
                    value={repetirPasswordValue}
                    onChange={onChangeHandler}
                    placeholder="Repite tu Contraseña"
                />

                <div className="botones">
                    <button onClick={onSignInClick}>Crear Cuenta</button>
                </div>
            </form>

            <nav>
                <Link className="crear-cuenta" to="/login">
                    ¿Ya tienes cuenta? Inicia Sesión.
                </Link>
            </nav>
        </Page>
    );
};
export default SignInUx;
