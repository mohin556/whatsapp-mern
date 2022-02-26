import React from 'react';
import './Chat.css';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Avatar, IconButton } from '@mui/material';
const Chat = () => {
    return (
        <div className='chat'>
          <div className="chat-header">
              <Avatar />
              
             <div className="chat-headerInfo">
                 <h3>Chat Room</h3>
                 <p>Last seen   </p>
             </div>
             <div className='chat-headerRight' >
              <IconButton>
             < SearchIcon />
              </IconButton>
              <IconButton>
             < AttachFileIcon />
              </IconButton>
              <IconButton>
             < MoreVertIcon />
              </IconButton>
             </div>
            
          </div>
          <div className="chat-body">
              <p className='chat-message'>
              <span className='chat-name'>Mohin</span>
            <span className='chat-time'>  {new Date().toUTCString()}  </span>
                  this is a message
              </p>

              <p className='chat-message chat-receiver'>
              <span className='chat-name'>Mohin</span>
            <span className='chat-time'>  {new Date().toUTCString()}  </span>
                  this is a message
              </p>
              <p className='chat-message'>
              <span className='chat-name'>Mohin</span>
            <span className='chat-time'>  {new Date().toUTCString()}  </span>
                  this is a message
              </p>






          </div>


          <div className="chat-footer">
            <InsertEmoticonIcon />
<form action="">
   <input type="text" placeholder='type a message' />
   <button type="submit"> send message </button>
   
</form>
<KeyboardVoiceIcon/>

          </div>



        </div>
    );
};

export default Chat;