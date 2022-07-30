import React from 'react';

const Caloria = ({ caloria }) => {
    const { descripcion, calorias, fecha, tipoEjercicio } = caloria;

    const formatearFecha = (fechaState) => {
        const fecha = fechaState.split('T')[0];
        const nuevaFecha = new Date(fecha).toLocaleDateString('HN', {
            year: 'numeric',
            month: 'long',
            day: '2-digit',
        });

        return nuevaFecha;
    };

    return (
        <div className="calorias">
            <p>
                <span>Actividad: </span> {descripcion}
            </p>
            <p>
                <span>Calorias quemadas: </span>
                {calorias} Kcal
            </p>
            <p>
                <span>Descripción: </span> {tipoEjercicio}
            </p>
            <p>
                <span>Fecha: </span>
                {formatearFecha(fecha)}
            </p>
        </div>
    );
};

export default Caloria;
