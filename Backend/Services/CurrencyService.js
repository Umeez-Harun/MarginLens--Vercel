const API_KEY = process.env.EXCHANGE_RATE_API_KEY || "demo";

async function getUsdToPkrRate() {
  try {
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/USD/PKR`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API responded with status ${res.status}`);
    const data = await res.json();
    if (data.result !== "success") throw new Error("API returned failure result");
    return data.conversion_rate;
  } catch (err) {
    throw new Error(`Currency conversion failed: ${err.message}`);
  }
}

async function convertUsdToPkr(amountUsd) {
  const rate = await getUsdToPkrRate();
  return {
    convertedAmount: parseFloat((amountUsd * rate).toFixed(2)),
    rate,
  };
}

module.exports = {
  getUsdToPkrRate,
  convertUsdToPkr
}