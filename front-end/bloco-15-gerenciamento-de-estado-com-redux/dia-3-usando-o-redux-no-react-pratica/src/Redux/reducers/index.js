import { combineReducers } from 'redux';
import reducerPersonalForm from './reducerPersonalForm';
import reducerProfissionalForm from './reducerProfessionalForm';

const rootReducer = combineReducers({
  reducerPersonalForm,
  reducerProfissionalForm,
});

export default rootReducer;
