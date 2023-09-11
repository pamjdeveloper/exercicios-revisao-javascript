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
  const coin = document.getElementById("select-coins").value;
  const convertValue = convertCoin(value, coin);
  document.getElementById("result").innerHTML = `$ ${convertValue}`;
};

const reset = () => {
  window.location.reload();
};

document.getElementById("convert-button").addEventListener("click", convert);
document.getElementById("cancel-button").addEventListener("click", reset);
