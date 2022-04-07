import { INSERT_FORMS_PROFESSIONAL } from '../actions/action';

const INITIAL_STATE = {
  tasksValueProfessional: [],
};

const reducerProfessionalForm = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INSERT_FORMS_PROFESSIONAL:
    console.log(action.state);
    return { ...state,
      tasksValueProfessional: [...state.tasksValueProfessional, action.state] };
  default: return state;
  }
};

export default reducerProfessionalForm;
