import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/table" />} />
      <Route path="/table" element={<MainPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
