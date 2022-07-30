const DaoObject = require('../../dao/mongodb/DaoObject');
module.exports = class Caloria {
  caloriaDao = null;

  constructor(caloriaDao = null) {
    if (!(caloriaDao instanceof DaoObject)) {
      throw new Error('An Instance of DAO Object is Required');
    }
    this.caloriaDao = caloriaDao;
  }
  async init() {
    await this.caloriaDao.init();
    await this.caloriaDao.setup();
  }
  

  async nuevaCaloria({
    userId = '', calorias = 0, tipoEjercicio = '', descripcion = ''
  }) {
    const result = await this.caloriaDao.insertar(
      {
        userId, calorias, tipoEjercicio, descripcion
      }
    );
    return {
      calorias, tipoEjercicio, descripcion,
      result
    };
  };

  async obtenerCalorias(userId) {
    return this.caloriaDao.obtenerTodos(userId);
  }
  async obtenerPorPaginacion(userId, page = 1, limit = 20) {
    return this.caloriaDao.obtenerTodosPaginacion({ userId, page, pageLimit: limit });
  }

  async obtenerPorTipoEjercicio(userId) {
    return this.caloriaDao.obtenerPorTipoEjercicio({ userId });
  }

  

}