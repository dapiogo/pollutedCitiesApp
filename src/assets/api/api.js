export const getAllPollutedCities = (query, date) =>
  fetch(
    `https://api.openaq.org/v1/measurements?country=${query}&limit=100&order_by=value&sort=desc&parameter=pm25&date_from=${date}`
  ).then(response => {
    if (response.ok) return response.json();
    throw Error(`Error ${response.status}: connection failed`);
  });