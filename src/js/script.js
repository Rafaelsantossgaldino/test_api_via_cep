const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighbourInput = document.querySelector("#neighbour");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");

const closeButton = document.querySelector("#close-message");

// Validates CEP input
cepInput.addEventListener("keypress", (e) => {
  const onlyNumber = /[0-9]/;
  const key = String.fromCharCode(e.keyCode);

  if(!onlyNumber.test(key)){
    e.preventDefault();
    return;
  }
});

cepInput.addEventListener("Keyup", (e) => {
  const inputValeu = e.target.value

  if(inputValue.length === 8){
    getAddress(inputValeu);
  }
});

// get customer adress from API
const getAddress = async(cep) => {
  console.log(cep);
  toggleLoader();
};

// show or hide loader
const toggleLoader = () => {
  
  const fadeElement = document.querySelector("#fade");
  const loaderElement = document.querySelector("#loader");

  fadeElement.classList.toggle("hide");
  loaderElement.classList.toggle("hide");
}
