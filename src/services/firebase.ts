import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_FIREBASE_APP_ID,
};

const initializeFirebase = () => {
  firebase.initializeApp(firebaseConfig);

  return {
    auth: firebase.auth(),
    database: firebase.database(),
  };
};

export default initializeFirebase;
