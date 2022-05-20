import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { showNotification, updateNotification } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import { auth } from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const useFirebase = () => {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {}, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user || {});
    });
  }, []);

  const navigate = useNavigate();

  const signUpWithEmailAndPassword = async (email, password) => {
    showNotification({
      id: 'load-data',
      loading: true,
      title: 'Signing up...',
      message: 'Please wait while we create a new account for you.',
      autoClose: false,
      disallowClose: true,
    });
    try {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(user);
          updateNotification({
            id: 'load-data',
            color: 'green',
            title: 'Successfully registered!',
            message: 'Welcome, you are now member of Aroma Central!',
            autoClose: 4000,
          });
          navigate('/');
        })
        .catch((error) => {
          if (error.message.includes('already-in-use')) {
            updateNotification({
              id: 'load-data',
              title: 'Email already in use',
              message:
                'Try logging in or reset password. Check your email again if you are a new user',
            });
          }
        });
      await sendEmailVerification(auth.currentUser);
      // updateUser(name);
    } catch (error) {
      showNotification({
        title: `${error.message}`,
        message: 'Hey there, your code is awesome! 🤥',
      });
    }
  };

  const logInWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;

        if (errorMessage.includes('wrong-password')) {
          showNotification({
            color: 'red',
            title: 'Wrong Password!',
            message:
              'Password you entered is not correct, please try again. You can reset if you forgot your password.',
          });
        } else {
          showNotification({
            color: 'red',
            title: 'Firebase Error',
            message: error.message,
          });
        }
      });
  };

  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const updateUser = (displayName) => {
    updateProfile(auth.currentUser, { displayName: displayName })
      .then(() => {
        setUser(auth.currentUser);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        showNotification({
          color: 'green',
          title: 'Password Reset Email Sent!',
          message:
            'A password reset link has been sent to your email, please reset your password to login.',
        });
      })
      .catch((error) => {
        showNotification({
          color: 'red',
          title: 'Firebase Error',
          message: error.message,
        });
      });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    });
  };

  return {
    signUpWithEmailAndPassword,
    logInWithEmailAndPassword,
    signInUsingGoogle,
    user,
    updateUser,
    resetPassword,
    handleSignOut,
  };
};
export default useFirebase;
