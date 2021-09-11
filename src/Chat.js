import { Avatar, IconButton } from "@material-ui/core";
import { MoreVert, SearchOutlined } from "@material-ui/icons";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import React from "react";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Group Name</h3>
          <p>Last Seen at ...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined style={{ color: "lightgray" }} />
          </IconButton>
          <IconButton>
            <AttachFileIcon style={{ color: "lightgray" }} />
          </IconButton>
          <IconButton>
            <MoreVert style={{ color: "lightgray" }} />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__meassage">
          <span className="chat__name">Raya</span>
          Message or chat
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__meassage chat__reciever">
          <span className="chat__name">Raya</span>
          Message or chat
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__meassage">
          <span className="chat__name">Raya</span>
          Message or chat
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__meassage chat__reciever">
          <span className="chat__name">Raya</span>
          Message or chat
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__meassage">
          <span className="chat__name">Raya</span>
          Message or chat
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__meassage chat__reciever">
          <span className="chat__name">Raya</span>
          Message or chat
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__meassage">
          <span className="chat__name">Raya</span>
          Message or chat
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__meassage chat__reciever">
          <span className="chat__name">Raya</span>
          Message or chat
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat__meassage">
          <span className="chat__name">Raya</span>
          Message or chat
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input type="text" placeholder="Type a message" />
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
