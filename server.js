const express = require("express");
const cors = require("cors");

const { getPrice } = require("./pricingRules");
const { logRequest, getStats } = require("./analytics");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    service: "ZIP Pricing API",
    status: "running",
  });
});

app.get("/api/pricing", (req, res) => {
  const { productId, variantId, zipCode } = req.query;

  if (!zipCode) {
    return res.status(400).json({
      success: false,
      message: "ZIP code is required",
    });
  }

  const price = getPrice(zipCode);

  res.json({
    success: true,
    productId,
    variantId,
    zipCode,
    price,
    formattedPrice: `$${price.toLocaleString()}`,
    shippingAvailable: true,
  });
});

app.post("/api/pricing", (req, res) => {
  const { productId, variantId, zipCode } = req.body;

  if (!zipCode) {
    return res.status(400).json({
      success: false,
      message: "ZIP code is required",
    });
  }

  const price = getPrice(zipCode);

  logRequest(zipCode);

  res.json({
    success: true,
    productId,
    variantId,
    zipCode,
    price,
    formattedPrice: `$${price.toLocaleString()}`,
    shippingAvailable: true,
  });
});

app.get("/api/stats", (req, res) => {
  res.json(getStats());
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});