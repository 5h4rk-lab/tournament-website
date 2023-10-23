import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9oHixQP22KmNcWgApH3NDsLJAgTsUjTE",
  authDomain: "auth-ff3a7.firebaseapp.com",
  projectId: "auth-ff3a7",
  storageBucket: "auth-ff3a7.appspot.com",
  messagingSenderId: "230394231331",
  appId: "1:230394231331:web:e0222e86cdfce9dc2e8f96"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
