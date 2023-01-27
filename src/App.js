import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import { RequireAuth } from './context/RequireAuth';
import Home from './pages/Home';
import Chat from './pages/Chat';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<RequireAuth><Chat /></RequireAuth>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
