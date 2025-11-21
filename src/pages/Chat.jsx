import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const formatTimestamp = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (userInput.trim() === '') return;

    const timestamp = new Date();
    const newUserMessage = {
      type: 'user',
      text: userInput,
      time: formatTimestamp(timestamp),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setUserInput('');
    setIsTyping(true);
    setHasStarted(true);

    setTimeout(() => {
      const helixaReply = {
        type: 'helixa',
        text: "Thanks for your message! ☺️ (I'm still learning... 🤖)",
        time: formatTimestamp(new Date()),
      };
      setMessages((prev) => [...prev, helixaReply]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className={`chat-container ${hasStarted ? 'started' : ''}`}>
      {/* Header */}
      <div className="chat-header">
        <img src="/assets/helixa_smile.png" alt="Helixa" className="chat-avatar" />
        <h2>Helixa Support</h2>
        <div className="top-buttons">
          <button className="logout-btn" onClick={handleLogout}>Log Out</button>
        </div>
      </div>

      {/* Messages Section */}
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-row ${msg.type}`}>
            <img
              src={msg.type === 'user' ? '/assets/user_icon.png' : '/assets/helixa_smile.png'}
              alt={msg.type === 'user' ? 'User' : 'Helixa'}
              className={`avatar ${msg.type === 'user' ? 'user-avatar' : ''}`}
            />
            <div className={`chat-bubble ${msg.type}`}>
              <div className="bubble-text">{msg.text}</div>
              <div className="timestamp">{msg.time}</div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-row helixa">
            <img src="/assets/helixa_smile.png" alt="Helixa" className="avatar" />
            <div className="chat-bubble helixa typing">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="typing-text">Helixa is typing...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef}></div>
      </div>

      {/* Input Section */}
      <form className="chat-input" onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
