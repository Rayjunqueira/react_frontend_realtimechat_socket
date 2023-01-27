import * as C from './styles';

import { io } from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';

const Chat = () => {
  const navigate = useNavigate();
  const { showMyName } = useContext(AuthContext);

  const [name, setName] = useState('');

  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => { 
    setSocket(io("http://localhost:3010"));
  }, []);
      
  useEffect(() => {
    if (socket) { 
      socket.on('message-from-server', (data) => {  
        setChatMessages(data); 
        console.log(chatMessages)
      })  
    } 
  }, [socket])

  useEffect(() => {
    const isUser = JSON.parse(localStorage.getItem("name"))[0];

    if (!isUser) {
      navigate("/");
    } 
  }, []);

  
  const handleSendMessage = () => {
    if (message) { 
    const nick = JSON.parse(localStorage.getItem("name"))[0];
      socket.emit('send-message', { message, nick }); 
      setMessage('');   
    } 
  }

  const handleExitChat =  () => {
    try {
      localStorage.removeItem("name");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <C.Container>
        <C.MessagesChat>
          <h2>Messages</h2>
        </C.MessagesChat>  
        <C.MessagesContainer>
          {chatMessages.map(text => {
            return ( 
              <C.Messages> 
                <p>{text.name} : {text.message}</p>
              </C.Messages>
            ) 
          })}  
        </C.MessagesContainer> 
        <C.FooterMessage>
          <C.MessageText>
              <textarea  
                name="" 
                id="" 
                cols="30" 
                rows="10"  
                placeholder='Digite sua mensagem...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button onClick={handleSendMessage}>Enviar</button>
          </C.MessageText>
          <C.RemoveChat>
            <button type='button' onClick={handleExitChat}>Abandonar a conversa</button>
          </C.RemoveChat>
        </C.FooterMessage>
    </C.Container>
  )
}

export default Chat;