// importing axios
import axios from 'axios';

// creating instance
const instance = axios.create({
  baseURL: 'https://api.github.com/',
});

// exporting instance
export default instance;
