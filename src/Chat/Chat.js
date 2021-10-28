import React,{useState,useRef} from 'react'
import './Chat.css'
import Sent from '../../src/assets/sent.png'
import Chatimg from '../../src/assets/chat.png'
import firebase from 'firebase/compat/app';
import Message from './Message';
import 'firebase/firestore'
import { collection } from "firebase/firestore";
import {useCollectionData} from 'react-firebase-hooks/firestore'

export const Chat = (user) => {
    const [message,setMessage]=useState("")
    const dummy=useRef()
    const firestore=firebase.firestore();


    const messagesRef=firestore.collection("messages");
    const query=messagesRef.orderBy('createdAt').limit(25)
    const [messages]=useCollectionData(query,{idField:'id'})
    const sendMessage =async  e =>{
        e.preventDefault();
       
        const{uid,photoURL}= user

        await messagesRef.add({
            text:message,
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
            uid:user.uid||'',
            photoURL:user.photoURL || ''

        })
        setMessage("");
        dummy.current.scrollIntoView({behavior:"smooth"})
    }
    const MessageClass= user ==user?"sent":"received";
    return (
        <>
        <div className="chatwindow">
            {messages && messages.map((msg)=>
             <span className={'messageClass'}><img src={Chatimg} alt=""/><p>{msg.text}</p></span>
            // <Message key={msg.id} message={msg}/>
            )}
            <span ref={dummy}></span>
        </div>   
        <form onSubmit={sendMessage}>
            <input value={message} onChange={(e)=>setMessage(e.target.value)}
             placeholder="Type here.."></input>
            <button><img src={Sent}alt="" ></img></button>
        </form>
        
        </>
    )
}
