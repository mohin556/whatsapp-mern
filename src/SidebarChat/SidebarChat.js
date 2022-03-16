import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@mui/material';
const SidebarChat = () => {
    return (
        <div className='SidebarChat'>
            <Avatar />
           <div className="sidebarChat-info">
           <h2>Room name  </h2>
            <h3>Perfect</h3>
           </div>
        </div>
    );
};

export default SidebarChat;