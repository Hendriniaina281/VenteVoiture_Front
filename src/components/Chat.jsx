import React from 'react';
import Message from './Message';
import Footer from './Footer';
import Menu from './Menu';
import { useLocation } from 'react-router-dom';


function Chat(props) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const value = queryParams.get('prop');

    return (
        <div>
            <Menu/>
            <Message prop={value}/>
            <Footer/>
        </div>       
    );
}

export default Chat;
