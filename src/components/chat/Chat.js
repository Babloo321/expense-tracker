import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';
import styles from './styles.module.css';
import { IoSend } from 'react-icons/io5';

const socket = io('http://localhost:3001');

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch initial messages from server
    const fetchMessages = async () => {
      const response = await axios.get('http://localhost:3001/messages');
      setMessages(response.data);
    };

    fetchMessages();

    // Listen for incoming messages
    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [msg, ...prevMessages]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const msg = {
        text: message,
        uid: 'user-id',
        photoURL: 'https://i.pravatar.cc/40',
      };
      socket.emit('chat message', msg);
      setMessage('');
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messagesContainer}>
        {' '}
        {[...messages].reverse().map((msg, index) => (
          <p key={index} className={styles.message}>
            {' '}
            {msg.text}{' '}
          </p>
        ))}{' '}
      </div>
      <form onSubmit={sendMessage} className={styles.form}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          fullWidth
          className={styles.input}
        />
        <button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.btn}
        >
          <IoSend className={styles.button} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
