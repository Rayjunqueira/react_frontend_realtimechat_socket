import { createContext } from 'react';

const AuthContext = createContext({
    name: [],
    addName: () => {},
    isName: () => {},
    showMyName: () => {},
});

export default AuthContext;