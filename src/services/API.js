import axios from 'axios';
const baseUrl = 'https://nbe-project-7c641-default-rtdb.firebaseio.com/';

// Invoking get method to perform a GET request
import AsyncStorage from '@react-native-async-storage/async-storage';

export const postData = async () => {
  const Accounts = [];

  axios.post(`${baseUrl}/users.json`, {
    name: 'Ayman',
    phoneNumber: '01273965628',
    amount: 10000,
    accountNum: '12345',
    accounts: Accounts,
  });
};
export const getAmount = async userID =>
  await axios
    .get(`${baseUrl}/users/${userID}.json`)
    .then(response => response.data)
    .then(data => data.amount);

export const addBeneficiary = async (userID, beneficiary) => {
  await axios
    .get(`${baseUrl}/users/${userID}.json`)
    .then(response => response.data)
    .then(data => {
      const Accounts = data.accounts;
      Accounts.push({
        id: Accounts.length,
        accountNum: beneficiary.accountNumber,
        imageUrl: beneficiary.imageUrl,
        name: beneficiary.firstName,
      });
      axios.patch(`${baseUrl}/users/${userID}.json`, {
        accounts: Accounts,
      });
    });
};
export const deleteBeneficiary = async (userID, beneficiary) => {
  await axios
    .get(`${baseUrl}/users/${userID}.json`)
    .then(response => response.data)
    .then(data => {
      let Accounts = data.accounts;
      Accounts = Accounts.filter(item => item.id != beneficiary.id);
      // Accounts.splice(beneficiary.id, 1);

      axios.patch(`${baseUrl}/users/${userID}.json`, {
        accounts: Accounts,
      });
    });
};

export const getAccountsData = async userID =>
  await axios
    .get(`${baseUrl}/users/${userID}/accounts.json`)
    .then(response => response.data);
// print the data

export const transactToAccount = async (
  myAccountNum,
  myAmount,
  accountNum,
  amount,
) => {
  // get all accounts
  axios.get(`${baseUrl}/users.json`).then(response => {
    for (const key in response.data) {
      console.log(response.data[key].accountNum);
      if (response.data[key].accountNum === accountNum) {
        console.log('found');
        // update amount
        axios.patch(`${baseUrl}/users/${key}.json`, {
          amount: response.data[key].amount + amount,
        });
        axios.patch(`${baseUrl}/users/${myAccountNum}.json`, {
          amount: myAmount - amount,
        });
      }
    }
  });
};

export const fetchData = () => {
  // const HistoryData = [
  //   {
  //     name: 'Carrefour',
  //     date: '15-12-2021',
  //     amount: 250.21,
  //     icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/History%2FCarrefour.png?alt=media&token=e43594e1-37fd-4a18-941c-18e7783a0dfa',
  //     // icon: require('../../../assets/images/ProfilePage/HomePageImages/History/Carrefour.png'),
  //   },
  //   {
  //     name: 'Amazon',
  //     date: '02-12-2021',
  //     amount: 3004.21,
  //     // icon: require('../../../assets/images/ProfilePage/HomePageImages/History/Amazon.png'),
  //     icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/History%2FAmazon.png?alt=media&token=389de0bd-c07',
  //   },
  //   {
  //     name: 'Jumia',
  //     date: '28-11-2021',
  //     amount: 2146.63,
  //     // icon: require('../../../assets/images/ProfilePage/HomePageImages/History/Jumia.png'),
  //     icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/History%2FJumia.png?alt=media&token=389de0bd-c0',
  //   },
  //   {
  //     name: 'Carrefour2',
  //     date: '15-12-2021',
  //     amount: 250.21,
  //     icon: 'https://firebasestorage.googleapis.com/v0/b/nbe-project-7c641.appspot.com/o/History%2FCarrefour.png?alt=media&token=e43594e1-37fd-4a18-941c-18e7783a0dfa',
  //   },
  // ];
  axios.get(`${baseUrl}/users/-NSX79Ib24MZk09QfekF.json`).then(response => {
    // check if its amount >5000
    console.log(response.data.accounts[0].id);

    // console.log(d);
    // for (const key in response.data.accounts[0].id) {
    //   console.log(key);
    // }
    // console.log(response.data);
    // }
  });
};
