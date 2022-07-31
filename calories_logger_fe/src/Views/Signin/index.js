import SignInUx from './SignInUx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getSignIn from '../../Services/api/signinapi';

const SignIn = () => {
    const Navigator = useNavigate();
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        nombre: '',
        password2: '',
        ocupacion: '',
    });
    const [alerta, setAlerta] = useState({});

    const onChangeHandler = (event) => {
        let { name, value } = event.target;
        let newFormValues = {
            ...formValues,
            [name]: value,
        };
        setFormValues(newFormValues);
    };
    const onSignInClick = async (e) => {
        e.preventDefault();

        const { email, password, nombre, password2, ocupacion } = formValues;

        if ([email, password, nombre, password2, ocupacion].includes('')) {
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

        try {
            const data = await getSignIn(
                formValues.email,
                formValues.password,
                formValues.nombre,
                formValues.ocupacion
            );
            setFormValues({
                email: '',
                password: '',
                nombre: '',
                password2: '',
                ocupacion: '',
            });
            setAlerta({
                msg: 'Tu cuenta ha sido creada correctemente',
                error: false,
            });
            setTimeout(() => {
                Navigator('/login');
            }, 2500);
        } catch (ex) {
            console.log(ex);
        }
    };
    const onLoginClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        Navigator('/login');
    };
    return (
        <SignInUx
            passwordValue={formValues.password}
            emailValue={formValues.email}
            nombreValue={formValues.nombre}
            repetirPasswordValue={formValues.password2}
            ocupacionValue={formValues.ocupacion}
            onSignInClick={onSignInClick}
            onLoginClick={onLoginClick}
            onChangeHandler={onChangeHandler}
            alerta={alerta}
        />
    );
};
export default SignIn;
