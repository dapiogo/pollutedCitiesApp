export const getAllPollutedCities = (query, date) =>
  fetch(
    `https://api.openaq.org/v1/measurements?country=${query}&limit=400&order_by=value&sort=desc&parameter=pm25&date_from=${date}`
  ).then(response => {
    if (response.ok) return response.json();
    throw Error(`Error ${response.status}: connection failed`);
  });

export const getDescriptionCity = city => 
  fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&category=city&redirects&origin=*&titles=${city}`)
  .then(response => {
    if (response.ok) return response.json();
    throw Error(`Error ${response.status}: connection failed`);
  });
