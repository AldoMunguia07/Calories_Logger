import cashFlowsApi from '../../Services/api/cashflowapi';

const INSERT_SUCCESS = "INSERT_SUCCESS";
const INSERT_FAILDED = "INSERT_FAILDED";


export const postNewCashFlow = async (dispatch, {description, date, category, amount, type }) => {
  try {

    const { data } = await cashFlowsApi(description, date, category, amount, type);
    dispatch({ type: INSERT_SUCCESS, payload: data });
    console.log(data);

  } catch (ex) {
    console.log(ex);
    dispatch({ type: INSERT_FAILDED, payload: 'Credenciales no son Válidas!' });
    throw Error("Credenciales no Válidas");
  }
}

