{/*import React, {createContext, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProv = ({Children}) => {
    const [user ,setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser  = (email,password) =>{
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password) 
    }

    
    const authInfo = {
        createUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {Children}
    </AuthContext.Provider>
  )
}

export default AuthProv */}