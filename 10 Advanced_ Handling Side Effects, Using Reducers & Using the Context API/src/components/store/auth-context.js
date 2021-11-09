import React from "react";

const AuthContext =React.createContext({ // you can pyt a string instead of the object or any other thing
    isLoggedIn: false, // initial(default) value
    onLogout: ()=>{}
})
export default AuthContext;