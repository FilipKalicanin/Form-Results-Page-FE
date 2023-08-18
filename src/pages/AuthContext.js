import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const AuthContext = createContext({
  jwt: null,
  setJwt: null,
});

export const AuthProvider = ({ children }) => {
  const [jwt, setJwt] = useState(Cookies.get('access_token'));

  useEffect(() => {
    if (jwt) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwt;
      Cookies.set('access_token', jwt);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      Cookies.remove('access_token');
    }
  }, [jwt]);

  return (
    <AuthContext.Provider value={{ jwt, setJwt }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
