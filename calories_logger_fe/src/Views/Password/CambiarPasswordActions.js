import changePassword from '../../Services/api/cambiarpasswordapi';

const CHANGE_PASSWORD_SUCCESS = "CHANGE_PASSWORD_SUCCESS";
const CHANGE_PASSWORD_FAILED = "CHANGE_PASSWORD_FAILED";


export const resetPasword = async (dispatch, password, token) => {
  try {

    console.log(token);
    const { data } = await changePassword(password, token);
    dispatch({ type: CHANGE_PASSWORD_SUCCESS, payload: data });
    console.log(data);

    return true;

  } catch (ex) {
    console.log(ex);
    dispatch({ type: CHANGE_PASSWORD_FAILED, payload: 'No insertado!' });
    throw Error("No insertado");
  }
}