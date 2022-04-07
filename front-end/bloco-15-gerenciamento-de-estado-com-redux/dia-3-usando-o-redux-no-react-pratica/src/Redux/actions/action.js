export const INSERT_FORMS_PERSONAL = 'INSERT_FORMS_PERSONAL';

export const INSERT_FORMS_PROFESSIONAL = 'INSERT_FORMS_PROFESSIONAL';

// export const newAction = (state) => ({ type: 'NEW_ACTION', state });

export const actionEnviarPersonal = (state) => ({ type: INSERT_FORMS_PERSONAL, state });

export const actionEnviarProfessional = (state) => (
  { type: INSERT_FORMS_PROFESSIONAL, state }
);
