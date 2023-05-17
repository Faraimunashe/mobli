import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => {},
    logout: ()  => {}
});

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState();

    async function kill()
    {    
        const url = "http://45.79.196.28/api/logout";
        const response = await axios.post(
            url,
            { headers: {"Authorization" : `Bearer ${authToken}`} }
        );

        const status = response.status
        console.log(response);
        return status;
    }

    function authenticate(token){
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }

    function logout(){
        console.log(authToken);
        const resp = kill();
        if(resp == 200 )
        {
            setAuthToken(null);
            AsyncStorage.removeItem('token');

        }else{
            setAuthToken(null);
            AsyncStorage.removeItem('token');
        }
    }

    const value = {
        token: authToken,
        isAuthenticated:!!authToken,
        authenticate: authenticate,
        logout: logout
    };

    return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>;
}

export default AuthContextProvider;