
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDPhBJZTH9Gyw2lgG3JXX_D1aDqYg8c_cE",
  authDomain: "bwibs-9b3b6.firebaseapp.com",
  projectId: "bwibs-9b3b6",
  storageBucket: "bwibs-9b3b6.appspot.com",
  messagingSenderId: "458317329774",
  appId: "1:458317329774:web:18586db8b2f787edff7d7f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
