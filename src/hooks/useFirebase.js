import { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { auth, googleProvider } from "../app/firebase";
import { useStateValue } from "../app/StateProvider";

const useFirebase = () => {
    const history = useHistory();
    console.log(history);
    const location = useLocation();
    console.log(location);
    const redirect_uri = location.state?.from || '/';

    const [{}, dispatch] = useStateValue();
    const googleSignIn = () => {
        return auth.signInWithPopup(googleProvider);
    }
    const signOut = () => {
        auth.signOut()
          .then(() => {
              
          })
    }
    useEffect(() => {
        const unSuscribe = auth.onAuthStateChanged((authUser) => {
          if(authUser) {
            console.log(authUser);
            //the user is logged in
            dispatch({
              type: 'SET_USER',
              payload: authUser
            });
            history.push(redirect_uri);
          } else {
            //the user is log out
            dispatch({
              type: 'SET_USER',
              user: {}
            });
          }
        });
        return () => {
          //any clean up operations go in here
          unSuscribe();
        }
      }, []);
    
    return {
        googleSignIn,
        signOut
    }
}

export default useFirebase;