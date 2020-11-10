import axios from 'axios';

const uri = 'https://fakestoreapi.com';

const apiFakeStore = axios.create({
    baseURL: uri,
  });



export default apiFakeStore;