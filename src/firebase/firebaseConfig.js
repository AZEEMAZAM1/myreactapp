// filepath: /Users/user/Desktop/my-react-app/src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBD9xip4DHVI2pYofz1fcGyONYKwiAMkYY",
  authDomain: "first-app-5e385.firebaseapp.com",
  projectId: "first-app-5e385",
  storageBucket: "first-app-5e385.appspot.com",
  messagingSenderId: "95683205116",
  appId: "1:95683205116:web:f2be7841063b94d1828479",
  measurementId: "G-YVJPQ018WP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };