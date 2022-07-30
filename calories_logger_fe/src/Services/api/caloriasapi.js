import { axiosPrivate } from './axios';
const caloriasApi = (calorias, tipoEjercicio, descripcion) => {
  return axiosPrivate.post(
    '/calorias/agregar',
    {
      calorias, tipoEjercicio, descripcion
    }
  )
};

export default caloriasApi;