import caloriasApi from '../../Services/api/caloriasapi';
import { axiosPrivate } from "../../Services/api/axios";

const INSERT_CALORIE_SUCCESS = "INSERT_CALORIE_SUCCESS";
const INSERT_CALORIE_FAILDED = "INSERT_CALORIE_FAILDED";
const CALORIES_LOAD = "CALORIES_LOAD";
const CALORIES_SUCCESS = "CALORIES_SUCCESS";
const CALORIES_FAILED = "CALORIES_FAILED";


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

export const getCaloriesDocuments = async (dispatch, page, limit) => {
  try {
    dispatch({ type: CALORIES_LOAD, payload: null });
    const { data } = await axiosPrivate.get(`/calorias/page/${page}/${limit}`);
    dispatch({ type: CALORIES_SUCCESS, payload: data });
  } catch (ex) {
    console.log("summaryActions", ex);
    dispatch({ type: CALORIES_FAILED, payload: "Error al Cargar Documentos" });
  }
}