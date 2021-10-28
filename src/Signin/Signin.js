import React from 'react'
import './Signin.css';
import { Button } from 'antd';
import Google from '../../src/assets/google-logo.png'
import firebase from 'firebase/compat/app';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Signin = ({auth}) => {
    const signinWithGoogle = e =>{
        e.preventDefault()
        
        const provider=new firebase.auth.GoogleAuthProvider()
        // firebase.auth.signInWithPopup(provider)
        firebase.auth().signInWithPopup(provider);
    }
   
    return (
        <div className="appSIgnin">
             <p>Sign in to start chat!!!</p><br/>
       
            <Button type="primary" className="signinbt" onClick={signinWithGoogle}>
            <img src={Google} className="btgoogle" alt=""></img>  
            <span>Sign in with Google</span>
            </Button>
        </div>
    )
}

export default Signin;
