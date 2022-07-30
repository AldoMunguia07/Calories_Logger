import { axiosPublic } from './axios';
const changePassword = (password, token) => {

  return axiosPublic.put(
    '/forgot-password/reset',
    {
      password, token
    }
  )
};

export default changePassword;
