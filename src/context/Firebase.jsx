 import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMEkQwx2TCKOje0vyDfBighU_WTptMtmM",
  authDomain: "bookshub-4927a.firebaseapp.com",
  projectId: "bookshub-4927a",
  storageBucket: "bookshub-4927a.appspot.com",
  messagingSenderId: "20221915930",
  appId: "1:20221915930:web:fb50ac636dd37bea35f2a3"
};

export const app = initializeApp(firebaseConfig);

const BookContext = createContext(null)
export const useFireBase =()=> useContext(BookContext)

 export const ContextProvider = (props)=>{

    return (
        <BookContext.Provider value={{}}>
            {props.children}
        </BookContext.Provider>
    )
 }