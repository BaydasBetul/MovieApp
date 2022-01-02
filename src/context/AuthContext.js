import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth"; // sayfadan ayrilsan bile giris yapan kullaniciyi ver
import { auth } from "../auth/firebase-config";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => { //buraya gelen en son ki currentuseri buna at yakala tut :)
      setCurrentUser(currentUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;