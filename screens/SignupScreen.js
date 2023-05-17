import { useContext, useState } from 'react';
import AuthContent from '../components/Auth/AuthContent';
import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';


function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState();
  const authCtx = useContext(AuthContext);

  async function signupHandler({username, email, password})
  {
    setIsAuthenticating(true);
    try{
      const token = await createUser(username, email, password);
      authCtx.authenticate(token);
    }catch(error){
      Alert.alert('Authentication failed', 'Could not create user please check you details or network.');
      setIsAuthenticating(false);
    }
    
  }

  if(isAuthenticating)
  {
    return <LoadingOverlay message="Creating user..."/>
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
