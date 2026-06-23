const pricingRules = {
  "75028": 1499,
  "10001": 1699,
  "90210": 1799,
};

function getPrice(zipCode) {
  return pricingRules[zipCode] || 1599;
}

module.exports = {
  getPrice,
};