let estadosDoBrasil = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']


function placeStates() {
  let estados = document.querySelector('#estados')
  for (let i = 0; i < estadosDoBrasil.length; i += 1) {
    let stateToBeAdd = document.createElement('option')
    stateToBeAdd.innerText = estadosDoBrasil[i]
    estados.appendChild(stateToBeAdd)
  }
}

placeStates()
