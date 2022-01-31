const API_URL = 'https://api.coincap.io/v2/assets';

const divContent = document.querySelector('#content');
const list = document.querySelector('#lista');
const ol = document.querySelector('ol');

async function pickArrayCoin() {
  try {
    const response = await fetch(API_URL);
    const obj = await response.json();
    const listTopTen = obj.data.filter((element) => element.rank <= 10);
    listTopTen.forEach((element) => {
      const li = document.createElement('li');
      li.innerText = `${element.name} (${element.symbol}): ${Math.round(element.priceUsd)} Dollars`;
      list.appendChild(li);
      });
  } catch(error) {
    ol.style.display = 'none';
    const h2 = document.createElement('h2');
    h2.innerText = 'A requisao API da lista de cryptomoedas nao foi concluida com exito';
    divContent.appendChild(h2);
    console.log('A requisicao nao foi concluida com sucesso');
  }
}

window.onload = () => pickArrayCoin();
