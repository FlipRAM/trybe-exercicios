import { INSERT_FORMS_PERSONAL } from '../actions/action';

const INITIAL_STATE = {
  tasksValuePersonal: [],
};

const reducerPersonalForm = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INSERT_FORMS_PERSONAL:
    console.log(action.state);
    return { ...state,
      tasksValuePersonal: [...state.tasksValuePersonal, action.state] };
  default: return state;
  }
};

export default reducerPersonalForm;
