import { axiosPublic } from './axios';
const sendEmail = (email) => {

  return axiosPublic.post(
    '/forgot-password/send-mail',
    {
      email
    }
  )
};

export default sendEmail;
