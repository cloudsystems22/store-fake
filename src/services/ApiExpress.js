import axios from 'axios';

const uri = 'http://localhost:3333';

const apiExpress = axios.create({
    baseURL: uri,
  });



export default apiExpress;