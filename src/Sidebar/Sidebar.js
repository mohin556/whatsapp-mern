import React from 'react';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import './Sidebar.css'
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Sidebar = () => {
    return (
        <div className='sidebar'>
          <div className="sidebar-header">
          <Avatar alt="Remy Sharp" src="https://i.ibb.co/wBLxTkR/photo-1494790108377-be9c29b29330.jpg" />
            <div className="sidebar-headerRight">
              <IconButton>
                  <DonutLargeIcon />
              </IconButton>
              <IconButton>
                  <ChatIcon />
              </IconButton>
              <IconButton>
                  <MoreVertIcon />
              </IconButton>
              
            </div>
          </div>
        </div>
    );
};

export default Sidebar;