# Shopify ZIP Code Based Product Pricing Demo

## Overview

This project demonstrates a Shopify storefront integrated with a backend pricing service that calculates product pricing based on destination ZIP code.

## Features

* Shopify Development Store
* Product Page ZIP Code Input
* Dynamic Product & Variant ID Support
* ZIP Validation
* Backend Pricing API
* Pricing Rules Engine
* Analytics Endpoint
* Health Monitoring Endpoint
* Render Cloud Deployment

## Architecture

Customer
→ Shopify Product Page

→ ZIP Pricing Widget

→ Pricing API (Node.js + Express)

→ Pricing Rules Engine

→ JSON Response

→ Updated Product Price Display

## API Endpoint

GET /api/pricing

Parameters:

* productId
* variantId
* zipCode

Example:

/api/pricing?productId=1&variantId=1&zipCode=75028

## Demo ZIP Codes

| ZIP Code | Price  |
| -------- | ------ |
| 75028    | $1,499 |
| 10001    | $1,699 |
| 90210    | $1,799 |
| Others   | $1,599 |

## Tech Stack

* Shopify
* Liquid
* JavaScript
* Node.js
* Express.js
* Render

## Deployment

Backend deployed on Render.

Health Endpoint:

/api/health

Analytics Endpoint:

/api/stats

## Author

Shreya Vernekar
