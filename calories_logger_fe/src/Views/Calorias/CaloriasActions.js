import caloriasApi from '../../Services/api/caloriasapi';

const INSERT_CALORIE_SUCCESS = "INSERT_CALORIE_SUCCESS";
const INSERT_CALORIE_FAILDED = "INSERT_CALORIE_FAILDED";


export const postNewCalories = async (dispatch, calorias, tipoEjercicio, descripcion) => {
  try {

    const { data } = await caloriasApi(calorias, tipoEjercicio, descripcion);
    dispatch({ type: INSERT_CALORIE_SUCCESS, payload: data });
    console.log(data);

    return true;

  } catch (ex) {
    console.log(ex);
    dispatch({ type: INSERT_CALORIE_FAILDED, payload: 'No insertado!' });
    throw Error("No insertado");
  }
}
