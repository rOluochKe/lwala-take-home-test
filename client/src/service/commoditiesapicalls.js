const BACKEND_API = 'http://localhost:4000/api/'

// fetch all commodities
export const getCommodities = () => {
  return fetch(`${BACKEND_API}commodities`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// submit a commodity
export const createCommodity = async (data) => {
  try {
    const response = await fetch(`${BACKEND_API}commodities/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};