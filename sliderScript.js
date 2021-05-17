const slider = document.getElementById('price-slider');
const priceAmount = document.getElementById('price-amount');
priceAmount.innerHTML = slider.value;

slider.oninput = function () {
  priceAmount.innerHTML = this.value;
};
