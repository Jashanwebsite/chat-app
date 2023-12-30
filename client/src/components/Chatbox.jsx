import {React,useState} from 'react'
import "./chatbox.css"
function Chatbox() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    const handleSendMessage = () => {
      if (newMessage.trim() === '') return;
  
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    };
  
    return (
      <div className="App">
        <div className="chat-box">
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className={message.sender === 'user' ? 'user-message' : 'other-message'}>
                {message.text}
              </div>
            ))}
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    );
}

export default Chatbox
