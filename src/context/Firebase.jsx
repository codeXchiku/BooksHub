 import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup,onAuthStateChanged } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDMEkQwx2TCKOje0vyDfBighU_WTptMtmM",
  authDomain: "bookshub-4927a.firebaseapp.com",
  projectId: "bookshub-4927a",
  storageBucket: "bookshub-4927a.appspot.com",
  messagingSenderId: "20221915930",
  appId: "1:20221915930:web:fb50ac636dd37bea35f2a3"
};

 const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app)
const provider = new GoogleAuthProvider()

const BookContext = createContext(null)

export const useFireBase =()=> useContext(BookContext)
  

 export const ContextProvider = (props)=>{
  const[myUser,setMyUser]=useState(null)

  const signUp = (email,password)=>{
    createUserWithEmailAndPassword(firebaseAuth, email, password)
  }
  
  const signIn = (email,password)=>{
    signInWithEmailAndPassword(firebaseAuth, email, password)
  }

  const googleAuthentication = ()=>{
    signInWithPopup(firebaseAuth, provider)
  }

  useEffect(()=>{
    onAuthStateChanged(firebaseAuth,(user)=>{
      console.log(user)
      if (user) {
        setMyUser(user)
      }else{
        setMyUser(null)
      }
    })
  },[])

  const isLoggedIn = myUser? true: false;

    return (
        <BookContext.Provider value={{signUp,signIn,googleAuthentication,isLoggedIn}}>
            {props.children}
        </BookContext.Provider>
    )
  }