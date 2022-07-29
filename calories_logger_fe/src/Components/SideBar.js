import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <aside className="aside">
            <p>¿Que quieres hacer ? </p>
            <Link to="/home" className="aside__enlaces">
                Mi resumen de calorias
            </Link>
            <Link to="/calorias" className="aside__enlaces">
                Registro Total de Calorias
            </Link>

            <Link to="/nueva-caloria" className="aside__enlaces">
                Registrar Nueva Caloria
            </Link>
        </aside>
    );
};

export default SideBar;
