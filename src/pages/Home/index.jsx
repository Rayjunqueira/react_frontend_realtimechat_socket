import * as C from './styles';

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { addName, isName } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [key, setKey] = useState('');

  useEffect(() => {
    const isUser = JSON.parse(localStorage.getItem("name"))[0];

    if (isUser) {
      navigate('/chat');
    }

  }, []);


  const handleEnterChat = () => {
    if (name) {
      if (isName() === false) {
        addName(name);
        navigate('/chat')    
      }
    } else {
      console.log('preencha as informações')
    }
  }

  return (
    <C.Container>
      <C.InputContainer>
        <h2>Digite um nick</h2>
        <input 
          type="text" 
          placeholder='Seu nick'
          onChange={(e) => setName(e.target.value)}
          value={name}  
        />
      </C.InputContainer>
      <C.Info>
        <button onClick={handleEnterChat}>Entrar</button>
      </C.Info>
    </C.Container>
  )
}

export default Home;