import { useState } from 'react';
import { Field } from '../../Components/InputField';
import Alerta from '../../Components/Alerta';

const NuevaCaloria = () => {
    const [caloria, setCaloria] = useState('');
    const [alerta, setAlerta] = useState({});
    const [fecha, setFecha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([caloria, fecha].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true,
            });
            return;
        }

        setAlerta({
            msg: 'Agregada Correctamente',
            error: false,
        });

        //TODO: Agregar caloria
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
                    name="fecha"
                    labelText="fecha"
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                />

                <div className="botones">
                    <input type="submit" value="Registrar Caloria" />
                </div>
            </form>
        </>
    );
};

export default NuevaCaloria;
