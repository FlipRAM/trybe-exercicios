import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    // const { tasksValueProfessional: { curriculo, cargo, descricao },
    //   tasksValuePersonal: { nome, email, cpf, endereco, cidade, estado } } = this.props;
    const { tasksValueProfessional, tasksValuePersonal } = this.props;
    const { curriculo, cargo, descricao } = tasksValueProfessional[0];
    const { nome, email, cpf, endereco, cidade, estado } = tasksValuePersonal[0];

    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { nome }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasksValueProfessional: state.reducerProfissionalForm.tasksValueProfessional,
  tasksValuePersonal: state.reducerPersonalForm.tasksValuePersonal,
});

FormDataDisplay.propTypes = {
  tasksValueProfessional: PropTypes.arrayOf(PropTypes.shape),
  tasksValuePersonal: PropTypes.arrayOf(PropTypes.shape),
}.isRequired;

export default connect(mapStateToProps)(FormDataDisplay);
