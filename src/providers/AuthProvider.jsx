import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    // Register Or Creating User
    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // Sign In functionality is in here
    const signIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //  LogOut functionality providing here 
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    //  onAuthStateChange for observing user's state changing in the application by the callback function
    useEffect( ()=>{
       const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log('user in the auth State changed',currentUser)
            setUser(currentUser);
            setLoading(false)

        } );
        return ()=>{
            // this is known as clean up function
            unSubscribe();
        }
    } ,[])

    const authInfo ={
        user, 
        createUser,
        logOut,
        loading,
        signIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>

    );
};

export default AuthProvider;