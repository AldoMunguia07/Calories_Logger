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

  async getUsuarioByEmail({email})  {

    return this.usuarioDao.getByEmail({email});

  };

  async getUsuarioByToken({token})  {

      return this.usuarioDao.getByToken({token});

  };

  async UpdateToken({codigo, token}) {
    const result = await this.usuarioDao.UpdateOneToken({codigo, token});

    return {
        codigo: codigo,
        token: token,
        modified: result.changes
    }

  };

  async UpdatePassword({codigo, password}) {
    const result = await this.usuarioDao.updateOnePasword({codigo, password: bcrypt.hashSync(password),});

    return {
        codigo: codigo,
        password: bcrypt.hashSync(password),
        modified: result.changes
    }

 };




}
