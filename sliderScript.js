const slider = document.getElementById('price-slider');
const priceAmount = document.getElementById('price-amount');
const pageViews = document.getElementById('page-views-text');
const checkbox = document.getElementById('toggle-checkbox');

function calculatePageViews(sliderInput) {
  let pageViewsMap = {
    1: '10K',
    2: '50K',
    3: '100K',
    4: '500K',
    5: '1M'
  };

  return pageViewsMap[sliderInput];
}

function applyDiscount(price, isYearlyBilling) {
  if (isYearlyBilling) {
    price = parseInt(price) * 0.75;
  }

  return price;
}

function calculatePrice(sliderInput, isYearlyBilling) {
  let price = 16;
  let priceMap = {
    1: '8',
    2: '12',
    3: '16',
    4: '24',
    5: '36'
  };

  price = priceMap[sliderInput];

  return applyDiscount(price, isYearlyBilling);
}

checkbox.addEventListener('change', function () {
  if (this.checked) {
    priceAmount.innerHTML = applyDiscount(priceAmount.textContent, true);
  } else {
    priceAmount.innerHTML = applyDiscount(priceAmount.textContent, false);
  }
});

function setSliderColor(sliderValue) {
  const softCyan = 'hsl(174, 77%, 80%)';
  const lightGrayishBlueSlider = 'hsl(224, 65%, 95%)';
  const sliderPercent = ((parseInt(sliderValue) - 1) / 4) * 100;

  return `linear-gradient(to right, ${softCyan} 0%, ${softCyan} ${sliderPercent}%, ${lightGrayishBlueSlider} ${sliderPercent}%, ${lightGrayishBlueSlider} 100%)`;
}

slider.addEventListener('input', function () {
  priceAmount.innerHTML = calculatePrice(this.value, checkbox.checked);
  pageViews.innerHTML = calculatePageViews(this.value, checkbox.checked);
  this.style.background = setSliderColor(this.value);
});
