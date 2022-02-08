import React, {useState} from "react";

const AuthContext = React.createContext({
    token: "",
    isLoggenIn: false,
    login: (token) => {},
    logout: () => {}
});

const calculateRemainingTime = (expirationTime) =>
{
    const currentTime = new Date().getTime()// returns the current time in ms
    const adjustedExpirationTime = new Date(expirationTime).getTime();

    const remainingTime = adjustedExpirationTime - currentTime;

    return remainingTime; // calculated wrongly
}

export const AuthContextProvider = (props) =>
{
    const initialToken = localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn = !!token // "!!" convert truthy or falsy values to true or false values

    const logoutHandler = () =>
    {
        setToken(null)
        localStorage.removeItem("token")
    }

    const loginHandler = (token, expirationTime) =>
    {
        setToken(token);
        localStorage.setItem("token", token);

        const remainingTime = calculateRemainingTime(expirationTime);
        console.log(remainingTime);

        setTimeout(logoutHandler, remainingTime) // trigger the logout function after ... ms
    }


    const contextValue = {
        token,
        isLoggenIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;