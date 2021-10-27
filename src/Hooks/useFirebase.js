import { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import InitializeAuthentication from "../Firebase/firebase.initialize";
import { useEffect } from "react";
InitializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        // console.log('called google');
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     setUser(result.user);
        // })
        // .catch(e => {
        //     setError(e.message);
        // })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                // console.log('called logout');
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                //const uid = user.uid;
                setUser(user)
            }
            else {
                setUser({})
            }
        })
    }, []);
    return { user, error, signInUsingGoogle, logOut };
}
export default useFirebase;