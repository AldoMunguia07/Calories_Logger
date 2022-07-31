import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Page from '../../Components/Page';
import { Field } from '../../Components/InputField';
import Alerta from '../../Components/Alerta';
import { useDispatch } from 'react-redux';
import { resetPasword } from './CambiarPasswordActions';

const CambiarPassword = () => {
    const [alerta, setAlerta] = useState({});
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const dispatch = useDispatch();
    const { token } = useParams();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true,
            });
            return;
        }

        if (password.length < 6) {
            setAlerta({
                msg: 'La contraseña debe de tener al menos 6 caracteres',
                error: true,
            });
            return;
        }

        if (password !== password2) {
            setAlerta({
                msg: 'Las contraseñas no coinciden',
                error: true,
            });
            return;
        }

        //TODO comenzar con recuperacion
        try {
            const ok = await resetPasword(dispatch, password, token);

            if (ok) {
                setAlerta({
                    msg: 'Contraseña restaurada exitosamente',
                    error: false,
                });
                setPassword('');
                setPassword2('');

                setTimeout(() => {
                    navigate('/login');
                }, 2500);
            }
        } catch (error) {
            setAlerta({
                msg: 'El enlace ha expirado',
                error: true,
            });
            console.log(error);
        }
    };

    return (
        <Page
            showNavBar={true}
            useAbsoluteCenter={true}
            pageTitle="Cambiar contraseña :)"
        >
            <h1 className="titulo-login">Calories Logger</h1>

            {alerta.msg && <Alerta alerta={alerta} />}

            <form
                onSubmit={handleSubmit}
                style={{ minWidth: '380px', maxWidth: '640px' }}
            >
                <Field
                    name="password"
                    labelText="Nueva contraseña"
                    type="password"
                    placeholder="Ingresa la nueva contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Field
                    name="password2"
                    labelText="Confirmar contraseña"
                    type="password"
                    placeholder="Confirma la contraseña"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />

                <div className="botones">
                    <input type="submit" value="Cambiar contraseña" />
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

export default CambiarPassword;
