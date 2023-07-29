document.getElementById("priceForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const asins = document.getElementById("asinInput").value.split(",");
  fetchPrices(asins);
});

function fetchPrices(asins) {
  const asinsParam = asins.map(asin => asin.trim()).join(",");
  fetch(`fetch_prices.php?asins=${asinsParam}`)
    .then(response => response.json())
    .then(data => displayPrices(data))
    .catch(error => console.error(error));
}

function displayPrices(prices) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";
  for (const asin in prices) {
    const price = prices[asin];
    resultsDiv.innerHTML += `<p><strong>ASIN:</strong> ${asin}, <strong>Price:</strong> ${price}</p>`;
  }
}

