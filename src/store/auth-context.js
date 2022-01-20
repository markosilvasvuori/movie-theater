import { createContext, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {},
});

export const AuthProvider = (props) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem('username');
        localStorage.removeItem('bookedTickets');
        localStorage.removeItem('reservedSeats');
        localStorage.removeItem('token');
    };

    const authCtxValues = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return (
        <AuthContext.Provider value={{ authCtxValues }}>
            {props.children}
        </AuthContext.Provider>
    );
};