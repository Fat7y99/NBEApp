import axios from 'axios';
const baseUrl = 'https://nbe-project-7c641-default-rtdb.firebaseio.com/';

// Invoking get method to perform a GET request
import AsyncStorage from '@react-native-async-storage/async-storage';

export const postData = async () => {
  const value = JSON.stringify({
    name: 'sayed',
    age: 28,
    married: false,
    money: 1000.25,
  });
  // await AsyncStorage.setItem('user', value);
  console.log('Loading Object');
  const recoveredValue = await AsyncStorage.getItem('user');
  const user = JSON.parse(recoveredValue);
  console.log(user);
  console.log(user.married ? 'yes' : 'no');
  // axios
  //   .post(`${baseUrl}/cars.json`, {
  //     name: 'sayed',
  //     age: 28,
  //     married: false,
  //     money: 1000.25,
  //   })
  //   .then(response => {

  //     console.log(response.data);
  //   });
};

export const fetchData = () => {
  axios.get(`${baseUrl}/cars.json`).then(response => {
    console.log(response.data);
  });
};
