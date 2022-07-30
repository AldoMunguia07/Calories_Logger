const { db } = require('../Connection');
const DaoObject = require('../DaoObject');
module.exports = class UsuariosDao extends DaoObject {
  constructor(db = null) {
    super(db, 'usuarios');
  }
  async setup() {
    if (process.env.MONGODB_SETUP) {
     const indexExists = await this.collection.indexExists('email_1');
     if (!indexExists) {
      await this.collection.createIndex({email:1}, {unique:true});
     }
    }
  }

  obtenerTodos() {
    return this.find();
  }

  obtenerPorCorreo({ email }) {
    return this.findOne({email});
  }

  insertar({ email, password, nombre, ocupacion,estado}) {
    const usuario = {
      email,
      password,
      nombre,
      ocupacion,
      estado,
      created: new Date().toISOString(),
    }
    return super.insertOne(usuario);
  }

  

}
