import { useState, createContext, useCallback, useEffect } from 'react';

import { notifyError } from '../App';
import { User } from '../models';
import { firebase, auth } from '../services/firebase';

type AuthContextProps = {
  user?: User;
  signInWithGoogle(): Promise<void>;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(googleUser => {
      if (googleUser) {
        setGoogleUserInfo(googleUser);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const setGoogleUserInfo = (googleUser: firebase.User | null) => {
    if (googleUser) {
      const { displayName, photoURL, uid } = googleUser;

      if (!displayName || !photoURL) {
        notifyError('Missing information from Google Account.');
        return;
      }

      setUser({ name: displayName, avatar: photoURL, id: uid });
    }
  };

  const signInWithGoogle = useCallback(async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    setGoogleUserInfo(result?.user);
  }, []);

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};
