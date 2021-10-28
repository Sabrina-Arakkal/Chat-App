import './App.css';
import React from 'react'
import { Layout } from 'antd';
import firebase from 'firebase/compat'
import 'firebase/compat/auth';
import { Button } from 'antd';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";


import  Logo from '../src/assets/logout.png'
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Chat } from './Chat/Chat';
import Signin from './Signin/Signin';
import First from './First/First'

const { Title } = Typography;
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });



const { Header, Footer, Content } = Layout;

firebase.initializeApp({
  apiKey: "AIzaSyDE6n6PILC7grSa9yf-pKlkp_pfzdoy-7s",
  authDomain: "chatapp-83b5e.firebaseapp.com",
  projectId: "chatapp-83b5e",
  storageBucket: "chatapp-83b5e.appspot.com",
  messagingSenderId: "671599135248",
  appId: "1:671599135248:web:6d779a01030d7257015895",
  measurementId: "G-40ZLZQYC5Y"
});


const auth=firebase.auth();
function App() {
  const [user]=useAuthState(auth)
  return (
    <div className="App">
      <Layout className="layout">
      <Header className="head">
      <First auth={auth} user={user}/>
     </Header>
     <Content className="content">
       {user?<Chat user={user}/>:<Signin auth={auth}/>}
       </Content>
      <Footer></Footer>
      </Layout>

    </div>
  );
}

export default App;
