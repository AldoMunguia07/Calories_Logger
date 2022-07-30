import { useEffect, useState } from 'react';
import calorias from '../../Services/api/calorias';
import Caloria from './Caloria';
import Spinner from '../../Components/Spinner/Spinner';

const Calorias = () => {
    const [caloriasState, setCaloriasState] = useState([]);
    const [cargando, setcargando] = useState(true);

    useEffect(() => {
        const consultarCalorias = async () => {
            try {
                const { data } = await calorias();

                setcargando(true);

                setCaloriasState(data);
            } catch (error) {
                console.log(error);
            }

            setcargando(false);
        };

        consultarCalorias();
    }, []);
    return (
        <div>
            {cargando ? (
                <Spinner />
            ) : caloriasState.length ? (
                <>
                    <h2 className="calorias-titulo">Tu actividad</h2>
                    {caloriasState.map((caloria) => (
                        <Caloria key={caloria._id} caloria={caloria} />
                    ))}
                </>
            ) : (
                <>
                    <p className="sin-calorias">
                        No hay calorias aun, comienza quemando algunas
                    </p>
                </>
            )}
        </div>
    );
};

export default Calorias;
