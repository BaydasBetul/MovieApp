import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkyU7U_8jYRpw_Xt6aFCGO3leXT5Za1gQ",
    authDomain: "movie-app-1-66b5b.firebaseapp.com",
    projectId: "movie-app-1-66b5b",
    storageBucket: "movie-app-1-66b5b.appspot.com",
    messagingSenderId: "996858983933",
    appId: "1:996858983933:web:3807dcc0509c4b42855594"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);