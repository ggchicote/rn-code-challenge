import axios from 'axios';
import { API_URL } from '@env';

const baseURL = API_URL;

console.log('baseURL',baseURL)

const getAll = async () => {

  try {
    const response = await axios.get(baseURL);

    if (response.status !== 200) {
      throw new Error('Something went wrong... please try again.');
    }

    return response.data.data?.children;

  } catch (e) {
    console.warn('axios error', e);
    return Promise.reject(e);
  }

};

export default { getAll };
