import { axiosPublic } from './axios';
const getSignIn = (email, password, nombre, ocupacion) => {
  return axiosPublic.post(
    '/security/registrarse',
    {
      email,
      password,
      nombre,
      ocupacion,
      estado: "ACT"
    }
  )
};

export default getSignIn;
