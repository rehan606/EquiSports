
import React, {  createContext,useEffect, useState,   } from 'react';
import { auth } from '../firebase/firebase.config';

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile   } from 'firebase/auth';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // Loader 
    const [loading, setLoading] = useState(true)
    
    // Create User 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Login User
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    // Ovserver 
    useEffect(()=>{
        const unSubscrbe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unSubscrbe()
        }
    },[])

    // Logout User 
    const logOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    };

    // Update user 
    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser , updatedData);
    }
    

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        loginUser,
        logOutUser,
        updateUserProfile,
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;