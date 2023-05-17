import axios from "axios";
import { Alert } from "react-native";


async function registra(mode, username, email, password)
{
    // const formData = new FormData();
    // formData.append('password', password);
    // formData.append('email', email);
    
    const url = "http://10.150.0.104:8000/register";
    const response = await axios.post(
        url,
        {
            username: username,
            email: email,
            password: password
        }
    );

    //const token = response.data.token
    console.log(response);
    //return token;
}

async function authenticate(mode, email, password)
{    
    const url = "http://45.79.196.28/api/login";
    const response = await axios.post(
        url,
        {
            email: email,
            password: password
        }
    );

    const token = response.data.token
    console.log(response);
    if(response.status != 201)
    {
        Alert.alert('Login error', "Could not log in");
    }else{

        return token;
    }
}

export function createUser(username, email, password)
{
    return authenticate('register', username, email, password);
}

export function login(email, password)
{
    return authenticate('login', email, password);
}