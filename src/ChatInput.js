import React, { useState } from "react";
import "./ChatInput.css";
import firebase from "firebase";
import db from "./firebase";
import { Button } from "@material-ui/core";
import { useStateValue } from "./StateProvider";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
        // console.log(db.collection('rooms').doc(channelId.collection("messages")))
      db.collection("rooms").doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }

    setInput("")
  };

  return (
    <div className='chatInput'>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
