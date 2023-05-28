import React, { useEffect, useState } from 'react';
import './style.css';
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";
import SendButton from './SendButton';
const Chat = () => {
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const [chats, setChats] = useState([])

  const db = getDatabase();
  const chatListRef = ref(db, 'chats');

  // storing user name and message
  const sendChat = () => {
    const chatRef = push(chatListRef);
    set(chatRef, {
      name, message: msg
    });
    setMsg("")
  };

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats(chats => [...chats, data.val()])
      // calling msg scrolling function 
      setTimeout(() => {
        updateHeight();
      }, 100);
    });
  }, []);
  // message scrolling setting
  const updateHeight = () => {
    let e = document.getElementById('chat');
    if (e) {
      e.scrollTop = e.scrollHeight;
    }
  };

  return (
    <>
      <div className='setting-padding'>
        {name ? null : <div>
          <input className='enterUserName' type="text" placeholder='Enter name to start'
            onBlur={e => setName(e.target.value)} />
          <button className='enterBtn'>Enter</button>
        </div>}

        {name ? <div>
          <h2>User: {name}</h2>
          <div id='chat' className="chatContainer">
            {chats.map((c, i) => (
              <div key={i} className={`container ${c.name === name ? 'me' : ''} `}>
                <p className='chatBox'>
                  {c.name === name ? null : <strong>{c.name}</strong>}
                  <span>{c.message}</span>
                </p>
              </div>))}
          </div>

          <div className='btm'>
            <input type="text" placeholder='Enter your message'
              value={msg} onInput={e => setMsg(e.target.value)} />
            {msg.length > 0 &&
              <SendButton sendChat={sendChat} />
            }
          </div>
        </div> : null}
      </div>
    </>
  )
}
export default Chat