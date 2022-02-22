import React from "react";

class LastJob extends React.Component {
  constructor() {
    super();

    this.state = {
      resumme: '',
      position: '',
      description: '',
    }

    this.changeForm = this.changeForm.bind(this);
  }

  changeForm(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  
  render() {
    return (
      <fieldset className="lastjob">
        <label for='resumme'>Resumo do curriculo: </label>
        <textarea id="resumme" name='resumme' rows='4' cols='50' maxLength='1000' onChange={this.changeForm}></textarea>
        <label for='position'>Cargo: </label>
        <textarea id="position" name="position" rows='4' cols='50' maxLength='40' onChange={this.changeForm}></textarea>
        <label for='description'>Descricao do cargo: </label>
        <textarea id="description" name="description" rows='4' cols='50' maxLength='500' onChange={this.changeForm}></textarea>
      </fieldset>
    )
  }
}

export default LastJob;
