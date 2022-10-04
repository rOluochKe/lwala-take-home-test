const BACKEND_API = 'http://localhost:4000/api/'

// fetch all requests
export const getRequests = () => {
  return fetch(`${BACKEND_API}requests`, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// submit a request
export const createRequest = async (data) => {
  try {
    const response = await fetch(`${BACKEND_API}requests/`, {
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