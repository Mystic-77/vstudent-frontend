import axios from 'axios';
import myToken from './token';
export default axios.create({
    "baseURL": "http://localhost:8080",
    "headers" :{
        "Authentication": "Bearer " + myToken.token
    }
});