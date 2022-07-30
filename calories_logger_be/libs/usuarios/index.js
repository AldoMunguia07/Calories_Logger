const DaoObject = require('../../dao/mongodb/DaoObject');
const bcrypt = require('bcryptjs');
module.exports = class Usuario {
  usuarioDao = null;

  constructor(usuarioDao = null) {
    if (!(usuarioDao instanceof DaoObject)) {
      throw new Error('An Instance of DAO Object is Required');
    }
    this.usuarioDao = usuarioDao;
  }
  async init() {
    await this.usuarioDao.init();
    await this.usuarioDao.setup();
  }
  

  async agregarUsuario({
    email,
    password,
    nombre,
    ocupacion,
    estado
  }) {
    const result = await this.usuarioDao.insertar(
      {
        email,
        password: bcrypt.hashSync(password),
        nombre,
        ocupacion,
        estado
      }
    );
    return {
      email,
      nombre,
      ocupacion,
      estado,
      result
    };
  };

  async obtenerUsuarios() {
    return this.usuarioDao.obtenerTodos();
  }

  async obtenerPorCorreo({email}) {
    return this.usuarioDao.obtenerPorCorreo({email});
  }

  compararContrasenia(rawPassword, dbPassword) {
    return bcrypt.compareSync(rawPassword, dbPassword);
  }


  
}
