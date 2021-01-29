import { Button, IconButton, Input, InputLabel } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import { FormControl } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  return (
    <div className="App">
      <img
        src="https://lh3.googleusercontent.com/proxy/8-aD5ELLPR5kGsBeqR2wG1SrfBA6-7Ubw-xQAOtQ_ukhf10-K9TMNjtLO6756kQtoRe7rJ9pCdERjldk_SoODTKyDr-x41lC4zgesJIVhgY1I_V-lbqh5Ms_NGGsPHMpR9lUz7pNjZiZtCsRwEJPNrJE0pDr"
        width="100px"
        height="100px"
        alt=""
      />
      <h1>Messenger Clone😆</h1>
      <h2>Hi, {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
