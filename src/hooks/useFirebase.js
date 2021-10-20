import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => result.user)
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const emailChange = (e) => {
    const validEmail = e.target.value.toString();
    setEmail(validEmail);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const emailSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleRegistrationSubmit = (e) => {
    emailSignUp();
    e.preventDefault();
    setError("");
  };
  const handleLoginSubmit = (e) => {
    emailSignIn();
    e.preventDefault();
    setError("");
  };

  const emailSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        console.log(result.user);
        setError("");
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    user,
    googleSignIn,
    logOut,
    isLoading,
    emailSignIn,
    emailSignUp,
    emailChange,
    passwordChange,
    handleRegistrationSubmit,
    handleLoginSubmit,
    error,
  };
};

export default useFirebase;
