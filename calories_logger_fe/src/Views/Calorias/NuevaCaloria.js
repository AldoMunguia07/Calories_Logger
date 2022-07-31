import { useState } from 'react';
import { Field } from '../../Components/InputField';
import Alerta from '../../Components/Alerta';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postNewCalories } from './CaloriasActions';

const NuevaCaloria = () => {
    const [caloria, setCaloria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [alerta, setAlerta] = useState({});
    const [tipoEjercicio, setTipoEjercicio] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([caloria, descripcion, tipoEjercicio].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true,
            });
            return;
        }

        const ok = await postNewCalories(
            dispatch,
            caloria,
            descripcion,
            tipoEjercicio
        );
        if (ok) {
            setAlerta({
                msg: 'Agregada Correctamente',
                error: false,
            });

            setTimeout(() => {
                setAlerta({});
                navigate('/calorias');
            }, 1000);
        }
    };

    return (
        <>
            <h1 className="titulo-caloria">Registra una nueva Caloria</h1>

            <form onSubmit={handleSubmit} className="formulario-calorias">
                {alerta.msg && <Alerta alerta={alerta} />}
                <Field
                    name="caloria"
                    labelText="Calorias Quemadas"
                    type="text"
                    value={caloria}
                    onChange={(e) => setCaloria(e.target.value)}
                    placeholder="Calorias Quemadas"
                />
                <Field
                    name="tipoEjercicio"
                    labelText="Tipo de ejercicio"
                    type="text"
                    value={tipoEjercicio}
                    onChange={(e) => setTipoEjercicio(e.target.value)}
                    placeholder="Tipo de ejercicio"
                />
                <Field
                    name="descripcion"
                    labelText="descripcion"
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Descripción"
                />
                <div className="botones">
                    <input type="submit" value="Registrar Caloria" />
                </div>
            </form>
        </>
    );
};

export default NuevaCaloria;
