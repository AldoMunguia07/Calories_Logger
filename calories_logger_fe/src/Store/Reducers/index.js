import { combineReducers } from "redux";

// Reducers Individuales
import app from './app';
import security from './security';
import calorias from './calorias';
import olvidepassword from './olvidepassword';
import cambiarpassword from './cambiarpassword';


const rootReducer = combineReducers({
    app,
    security,
    calorias,
    olvidepassword,
    cambiarpassword
});

export default rootReducer;