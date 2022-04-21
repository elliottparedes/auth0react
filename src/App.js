
import './App.css';
import './LoginButton';

import Profile from './Profile';
import { useAuth0 } from "@auth0/auth0-react";

const  App = () => 
{

  const { isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if(isAuthenticated)
  {
    return <><Profile /></>
  }
  else loginWithRedirect();

 
}
export default App;
