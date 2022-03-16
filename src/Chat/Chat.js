import React, { useState } from 'react';
import './Chat.css';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { Avatar, IconButton } from '@mui/material';
import axios from '../axios';
const Chat = ({message}) => {
  const [input,setInput] = useState("");

   const sendMessage = async (e)=> {
     e.preventDefault();
   
    await   axios.post("/messages/new",{
      message: input,
      name : "Whatsapp",
      timestamps: "Just now!",
      received : false,


     });

     setInput("");




   }



  
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
              {message.map((message)=>(
                  <p 
                  className={`chat-message  ${message.received && " chat-receiver   "}     `}>
                  <span className='chat-name'>{message.name}</span>
                   {message.message}
                <span className='chat-time'>  {new Date().toUTCString()}  </span>
                     
                  </p>

                ))

              }



           

              {/* <p className='chat-message chat-receiver'>
              <span className='chat-name'>{message.name}</span>
            <span className='chat-time'>  {new Date().toUTCString()}  </span>
                  this is a message
              </p> */}
              {/* <p className='chat-message'>
              <span className='chat-name'>Mohin</span>
            <span className='chat-time'>  {new Date().toUTCString()}  </span>
                  this is a message
              </p> */}






          </div>


          <div className="chat-footer">
            <InsertEmoticonIcon />
<form action="">
   <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='type a message' />
   <button onClick={sendMessage} type="submit"> send message </button>
   
</form>
<KeyboardVoiceIcon/>

          </div>



        </div>
    );
};

export default Chat;