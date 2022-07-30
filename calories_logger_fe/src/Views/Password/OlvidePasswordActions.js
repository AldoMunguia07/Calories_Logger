import sendEmail from '../../Services/api/emailapi';

const EMAIL_SUCCESS = "EMAIL_SUCCESS";
const EMAIL_FAILED = "EMAIL_FAILED";


export const sendEmailToken = async (dispatch, email) => {
  try {

    const { data } = await sendEmail(email);
    dispatch({ type: EMAIL_SUCCESS, payload: data });
    console.log(data);

    return true;

  } catch (ex) {
    console.log(ex);
    dispatch({ type: EMAIL_FAILED, payload: 'Correo no enviado!' });
    throw Error("Correo no enviado");
  }
}
