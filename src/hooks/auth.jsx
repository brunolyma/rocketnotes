import {
  createContext,
  useContext,
  useState,
} from 'react';

import PropTypes from 'prop-types';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      setData(user, token);

      api.defaults.headers.authorization = `Bearer ${token}`;
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Unable to sign in");
      }
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

AuthProvider.propTypes = {
  children: PropTypes.object,
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
