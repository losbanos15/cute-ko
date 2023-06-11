import React, { useState } from 'react';
import { FaUser, FaRobot, FaPaperPlane} from 'react-icons/fa';
import Logo from "../src/logo.png";
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const userMessage = { content: inputMessage, sender: 'user' };
      
      let botMessage;
    // Generate bot response based on user input
    if (inputMessage.toLowerCase().includes('hi')) {
      botMessage = { content: 'Hello! How can I assist you?', sender: 'bot' };
    } else if (inputMessage.toLowerCase().includes('ai')) {
      botMessage = { content: 'AI stands for Artificial Intelligence. It is a branch of computer science that deals with the creation and development of intelligent machines that can perform tasks that typically require human intelligence. AI systems are designed to perceive their environment, reason and learn from data, and make decisions or take actions to achieve specific goals.', sender: 'bot' };
    }
     else if (inputMessage.toLowerCase().includes('dotnet')) {
      botMessage = { content: '.NET (pronounced "dot net") is a software framework developed by Microsoft that supports the development and execution of a wide range of applications. It provides a programming model and a runtime environment for building and running applications on various platforms, including Windows, macOS, and Linux.', sender: 'bot' };
    } else {
      botMessage = { content: 'No replay.', sender: 'bot' };
    }

      setMessages([...messages, userMessage, botMessage]);
      setInputMessage('');

      // Add your logic here for processing user input and generating bot responses
      // You can update the messages state with the bot's actual response based on the user's input
    }
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleInputKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const showSidebar = () => {
    setSidebarCollapsed(false);
  };

  const hideSidebar = () => {
    setSidebarCollapsed(true);
  };

  const handleNewChat = () => {
    setMessages([]);
    setInputMessage('');
  };

  return (
    <div className="app">
      {!sidebarCollapsed && (
        <div className="sidebar">
          <nav className="logo">
          <img src={Logo} alt="Logo" />
        </nav>
          <button className="new-chat-btn" onClick={handleNewChat}>
          <p><ion-icon name="add-outline"></ion-icon>&nbsp; New Chat</p>
          </button>
          <ul>
          <li>
            <ion-icon name="chatbox-outline"></ion-icon>&nbsp; &nbsp;New Message
          </li>
            {messages
              .filter((message) => message.sender === 'user')
              .map((message, index) => (
                <li key={index}> <ion-icon name="chatbox-outline"></ion-icon>&nbsp; &nbsp;{message.content}</li>
              ))}
          </ul>
        <nav className="Footer">
          <p>
            <ion-icon name="settings-outline"></ion-icon>&nbsp; &nbsp; Settings
          </p>
          <ion-icon name="person-outline"></ion-icon>&nbsp; &nbsp; Jason Ryler
          H. Los Baños
        </nav>
       </div>
      )}
      <div className="chat-window">
        <div className="chat-header">
          <button className="toggle-sidebar-btn" onClick={sidebarCollapsed ? showSidebar : hideSidebar}>
            <i className={`fas ${sidebarCollapsed ? 'fa-bars' : 'fa-arrow-left'}`}></i>
          </button>
          <h2 style={{textAlign: "center", paddingLeft: 30}}>
          CHAT JTP&nbsp;
          <ion-icon className="logo" name="logo-octocat"></ion-icon>
          <ion-icon style={{float: "right", paddingRight: 20, height: 30}} name="logo-twitch"></ion-icon>
        </h2>
        </div>
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
            >
             {message.sender === 'user' ? <FaUser/> : <ion-icon name="logo-octocat"></ion-icon>}
              <span>&nbsp;&nbsp;{message.content}</span>
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Ask anything..."
            value={inputMessage}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
          <button onClick={handleSendMessage}>
            <FaPaperPlane/>
          </button>
        </div>
        <p className="info">
              Artificial intelligence is revolutionizing the way we live and
              work, pushing the boundaries of what's possible and shaping the
              future of technology
            </p>
      </div>
   </div>
  );
};

export default App;

