
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat/Chat';
import Sidebar from './Sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';
function App() {
const [message,setMessage]= useState([]);
console.log(message)
useEffect(()=>{

axios.get('/messages/sync')
.then(response =>{
  
  setMessage(response.data)
})



},[])








 useEffect(() => {
  const pusher = new Pusher('9a24c834c502293df0e0', {
    cluster: 'eu'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage) => {
    // alert(JSON.stringify(newMessage));
    setMessage([...message,newMessage])
  })
  
 return () => {
     channel.unbind_all();
     channel.unsubscribe();
  }



 },[message])



  return (
    <div className="app">
      <div className="app-body">
        <Sidebar />
        <Chat message={message} />
      </div>
  
    </div>
  );
}

export default App;
