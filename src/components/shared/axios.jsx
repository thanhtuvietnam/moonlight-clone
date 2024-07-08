import axios from 'axios';
import { API_URL } from './constants';
// import 'dotenv/config';

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: '134ed9eaef855eca48b2ff3096debe63',
  },
});

export default instance;
