export const getAllPollutedCities = query =>
  fetch(
    `https://api.openaq.org/v1/measurements?&country=${query}&parameter=pm25&order_by[]=value&sort[]=desc&limit=10`
  ).then(response => {
    if (response.ok) return response.json();
    throw Error(`Error ${response.status}: connection failed`);
  });
