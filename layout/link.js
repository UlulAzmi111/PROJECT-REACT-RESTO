const url = 'http://localhost:8000/api';
const token = 'WhHfSQqegYkQINLuYHaLK8WrKB6OGD2szkzr3Pux';


export const link = axios.create({
    baseURL : url,
    headers : {
        'api_token' : token
    }
 });