import { useState } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../Components/Page';
import { Field } from '../../Components/InputField';
import Alerta from '../../Components/Alerta';
import { useDispatch } from "react-redux";
import { sendEmailToken } from "./OlvidePasswordActions";
const OlvidePassword = () => {
    const [alerta, setAlerta] = useState({});
    const [correo, setCorreo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([correo].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true,
            });
            return;
        }

        //TODO comenzar con recuperacion
        try {
            const ok = await sendEmailToken(dispatch, correo);

            if(ok)
            {
                setAlerta({
                    msg: 'Hemos enviado las instrucciones a tu correo',
                    error: false,
                });
                setCorreo('');
            }

        } catch (error) {
            setAlerta({
                msg: 'Correo electrónico no encontrado',
                error: true,
            });
            console.log(error);
        }
    };

    return (
        <Page
            showNavBar={true}
            useAbsoluteCenter={true}
            pageTitle="Olvide mi contraseña :("
        >
            <h1 className="titulo-login">Calories Logger</h1>

            {alerta.msg && <Alerta alerta={alerta} />}

            <form
                onSubmit={handleSubmit}
                style={{ minWidth: '380px', maxWidth: '640px' }}
            >
                <Field
                    name="email"
                    labelText="Correo Electrónico"
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />

                <div className="botones">
                    <input type="submit" value="Enviar Email" />
                </div>
            </form>
            <nav>
                <Link className="crear-cuenta" to="/signin">
                    ¿No tienes cuenta? Comienza Creando Una.
                </Link>

                <Link className="crear-cuenta" to="/login">
                    ¿Ya tienes cuenta? Inicia Sesión.
                </Link>
            </nav>
        </Page>
    );
};

export default OlvidePassword;
