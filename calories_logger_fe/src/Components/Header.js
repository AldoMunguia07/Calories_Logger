const Header = () => {
    return (
        <header className="header">
            <div className="header__contenedor">
                <h2>Calories Logger</h2>

                <p>Hola: Usuario</p>

                <button
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
