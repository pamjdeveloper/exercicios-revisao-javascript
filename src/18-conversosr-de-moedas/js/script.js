const exchangeRate = { dollar: 5.5, euro: 6.5 };

const convertRealToDollar = (value) => value / exchangeRate.dollar;

const convertRealToEuro = (value) => value / exchangeRate.euro;

const convertDollarToReal = (value) => value * exchangeRate.dollar;

const convertEuroToReal = (value) => value * exchangeRate.euro;

const convertCoin = (value, coin) => {
  switch (coin) {
    case "dollar":
      return convertRealToDollar(value);
    case "euro":
      return convertRealToEuro(value);
    case "real-to-dollar":
      return convertDollarToReal(value);
    case "real-to-euro":
      return convertEuroToReal(value);
    default:
      return value;
  }
};

const convert = () => {
  const value = parseFloat(document.getElementById("input-value").value);
  validateInputValue(value);

  const coin = document.getElementById("select-coins").value;
  validateInputCoin(coin);

  const convertValue = convertCoin(value, coin);
  document.getElementById("result").innerHTML = `$ ${convertValue}`;
};

const validateInputValue = (value) => {
  if (isNaN(value) || value <= 0) {
    alert("Por favor, insira um valor válido maior que zero.");
    return;
  }
};

const validateInputCoin = (coin) => {
  if (coin === "") {
    alert("Por favor, selecione uma moeda.");
    return;
  }
};

const reset = () => {
  window.location.reload();
};

document.getElementById("convert-button").addEventListener("click", convert);
document.getElementById("cancel-button").addEventListener("click", reset);
