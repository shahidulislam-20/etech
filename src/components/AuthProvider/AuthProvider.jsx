import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

export const AuthProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(true);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('spying the user', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }

    }, [])

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {displayName: name, photoURL: photo});
    }

    const provider = new GoogleAuthProvider();
    
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const authInfo = {
        user,
        createUser,
        loginUser,
        logOutUser,
        googleLogin,
        updateUserProfile,
        loading,
        darkMode,
        setDarkMode
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;