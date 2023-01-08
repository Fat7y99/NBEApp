import axios from 'axios';
const baseUrl = 'https://nbe-project-7c641-default-rtdb.firebaseio.com/';

// Invoking get method to perform a GET request

export const postData = () => {
  axios
    .post(`${baseUrl}/cars.json`, {
      name: 'sayed',
      age: 28,
      married: false,
      money: 1000.25,
    })
    .then(response => {
      console.log(response.data);
    });
};

export const fetchData = () => {
  axios.get(`${baseUrl}/cars.json`).then(response => {
    console.log(response.data);
  });
};
