import { useEffect, useState } from 'react';
import calorias from '../../Services/api/calorias';
import Spinner from '../../Components/Spinner/Spinner';

const Resumen = () => {
    const [caloriasState, setCaloriasState] = useState([]);
    const [cargando, setcargando] = useState(true);

    let totalCalorias = 0;
    let promedio = 0;

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

    totalCalorias = caloriasState.reduce(
        (total, caloria) => total + caloria.calorias,
        0
    );

    promedio = parseInt(totalCalorias / caloriasState.length);
    if (isNaN(promedio)) {
        promedio = 0;
    }

    return cargando ? (
        <Spinner />
    ) : (
        <>
            <h2 className="calorias-titulo">Tu Resumen</h2>
            <div className="grid-resumen">
                <div className="resumen-columna datos">
                    <p>Total calorias quemadas</p>
                    <span>{totalCalorias} cal</span>
                </div>
                <div className="resumen-columna datos">
                    <p>Promedio calorias quemadas</p>
                    <span className="promedio">{promedio} cal</span>
                </div>
            </div>
        </>
    );
};

export default Resumen;
