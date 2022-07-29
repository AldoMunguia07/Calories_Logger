import React from 'react';

const Alerta = ({ alerta }) => {
    return (
        <div
            className={`${
                alerta.error ? 'alerta-error' : 'alerta-exito'
            } alerta`}
        >
            {alerta.msg}
        </div>
    );
};

export default Alerta;
