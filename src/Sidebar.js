import React, {useState, useEffect} from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PeopleIcon from '@material-ui/icons/People';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';

import SidebarOption from "./SidebarOption";
import db from "./firebase";

function Sidebar() {
  const [channels, setChannels] = useState([]);
    
  useEffect(() => {
    //run this code once when the sidebar component loads.
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name
        }))
      )
    );
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h2>Yaniv Sultan</h2>
          <h3>
            <FiberManualRecordIcon /> Online
          </h3>
        </div>
        <CreateIcon />
      </div>

      <SidebarOption Icon={InsertCommentIcon} title='Insert Comment' />
      <SidebarOption Icon={InboxOutlinedIcon} title='Inbox' />
      <SidebarOption Icon={FavoriteBorderOutlinedIcon} title='Saved Items' />
      <SidebarOption Icon={PeopleIcon} title='Users' />
      <SidebarOption Icon={AppsIcon} title='Apps' />
      <SidebarOption Icon={FileCopyIcon} title='Saved Files' />
  
      <hr />
      <SidebarOption Icon={AddOutlinedIcon} title="add channel" addChannelOption={true}/>
      <hr />
      {/* Connect db and list all the channels */}
      {channels.map(channel => (
          <SidebarOption key={channel.id} title={channel.name} id={channel.id} />
      ))}
    </div>
  );
};

export default Sidebar;
