import { useNavigate } from "react-router-dom";

const Header = ({usuario}) => {
    const navigate = useNavigate();
    const SingOut = async (e) => {
        e.preventDefault();
        localStorage.removeItem('auth');
        navigate("/login");

    };
    return (
        <header className="header">
            <div className="header__contenedor">
                <h2>Calories Logger</h2>

                <p>Bienvenido: {usuario}</p>

                <button onClick={SingOut}
                    type="button"
                    className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold"
                >
                    Cerrar Sesion
                </button>
            </div>
        </header>
    );
};

export default Header;
