import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {

  const [isAuthenticating, setIsAuthenticating] = useState();
  const authCtx = useContext(AuthContext);
  
  async function loginHandler({email, password})
  {
    setIsAuthenticating(true);
    try{
      const token = await login(email, password);
      authCtx.authenticate(token);
    }catch(error){
       Alert.alert('Authentication failed', 'Cannot log in please check your credintials or network');
       setIsAuthenticating(false);
    }
    
  }

  if(isAuthenticating)
  {
    return <LoadingOverlay message="logging you in..."/>
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}


export default LoginScreen;
