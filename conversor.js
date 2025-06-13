const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select-moeda");
const currencyFromSelect = document.querySelector(".currency-select-país");
const currencyFromImage = document.querySelector(".currency-img-from");

const currencyFromName = document.querySelector(".moeda");

function changeCurrencyFrom() {
  switch (currencyFromSelect.value) {
    case "real":
      currencyFromName.innerHTML = "Real";
      break;
    case "dólar":
      currencyFromName.innerHTML = "Dólar Americano";
      break;
    case "euro":
      currencyFromName.innerHTML = "Euro";
      break;
    case "libra":
      currencyFromName.innerHTML = "Libra";
      break;
    case "bitcoin":
      currencyFromName.innerHTML = "Bitcoin";
      break;
  }

  convertValues();
}

const select = document.getElementById("currency-select");
const img = document.querySelector(".currency-img-fron");

const imageMap = {
  real: "./imgconversor/brasil.png",
  dólar: "./imgconversor/uea.png",
  euro: "./imgconversor/euro.png",
  libra: "./imgconversor/libra.png",
  bitcoin: "./imgconversor/bitcoin.png",
};

select.addEventListener("change", () => {
  const selectedValue = select.value;
  img.src = imageMap[selectedValue];

  img.alt = `Bandeira de ${selectedValue}`;
});

currencyFromSelect.addEventListener("change", changeCurrencyFrom);

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;
  const inputCurrencyValueToConvert = document.querySelector(".moeda-valor");
  const inputCurrencyValueToConverted =
    document.querySelector(".moeda-valor-total");

  console.log(currencySelect.value);

  const dolarToday = 5.56;
  const euroToday = 6.34;
  const libraToday = 7.5;
  const bitcoinToday = 580496.47;

  if (currencySelect.value == "dólar") {
    inputCurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "libra") {
    inputCurrencyValueToConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if (currencySelect.value == "bitcoin") {
    inputCurrencyValueToConverted.innerHTML =
      (inputCurrencyValue / bitcoinToday).toFixed(6) + " BTC";
  }
  if (currencySelect.value == "euro") {
    inputCurrencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  inputCurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue / realToday);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dólar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./imgconversor/uea.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./imgconversor/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./imgconversor/libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "BitCoin";
    currencyImage.src = "./imgconversor/bitcoin.png";
  }

  if (currencySelect.value == "real") {
    currencyName.innerHTML = "Real";
    currencyImage.src = "./imgconversor/brasil.png";
  }

  convertValues();
}
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
