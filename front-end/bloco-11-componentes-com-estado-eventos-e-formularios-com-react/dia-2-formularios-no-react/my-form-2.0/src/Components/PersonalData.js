import React from "react";

class PersonalData extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: false,
    }

    this.changeForm = this.changeForm.bind(this);
    this.transformUpper = this.transformUpper.bind(this);
  }

  changeForm(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  transformUpper(event) {
    this.setState({
      [event.target.name]: event.target.value.toUpperCase(),
    })
  }

  render() {
    return (
      <fieldset className="personal-data">
        <label for='name'>Nome: </label>
        <input id="name" name='name' type='text' maxLength='40' onChange={this.transformUpper} value={this.state.name}></input>
        <label for='email'>Email: </label>
        <input id="email" name='email' type='email' onChange={this.changeForm}></input>
        <label for='cpf' >CPF: </label>
        <input id="cpf" name='cpf' type='text' onChange={this.changeForm}></input>
        <label for='adress'>Endereco: </label>
        <input id="adress" name='endereco' type='text' onChange={this.changeForm}></input>
        <label for='city'>Cidade: </label>
        <input id="city" name='cidade' type='text' onChange={this.changeForm}></input>
        <label for='state'>Estado: </label>
        <select id="state" name="estado" onChange={this.changeForm}>
          <option selected value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goías</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraíma</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </select>
        <label for='house'>Casa:</label>
        <input type='radio' id='house' value='casa' name="tipo" onChange={this.changeForm}></input>
        <label for='apartment'>Apartamento</label>
        <input type='radio' id='apartment' value='apartamento' name="tipo" onChange={this.changeForm}></input>
      </fieldset>
    )
  }
}

export default PersonalData;
