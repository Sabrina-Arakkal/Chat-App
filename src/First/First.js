import React from 'react'
import firebase from 'firebase/compat'
import 'firebase/compat/auth';
import { Button } from 'antd';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './First.css';

import  Logo from '../../src/assets/logout.png'
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { createFromIconfontCN } from '@ant-design/icons';
import {useAuthState} from 'react-firebase-hooks/auth'

const { Title } = Typography;
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });


const First = (auth,user) => {
    return (
        <div className="head">
           
        <Avatar className="avatar"size="large" icon={<UserOutlined />} />
        <Title level={3}>   Chat ME</Title> 
       
        <div className="bt">
       <Button type="primary" className="logout" onClick={()=>firebase.auth().signOut()}>
            {user && <img src={Logo} className="imgs" alt="" className="logoutimg"></img> }
          </Button>
          </div>
       
     </div>
     
    )
}

export default First
