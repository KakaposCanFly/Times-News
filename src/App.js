import { Routes, Route } from 'react-router-dom'

import MainScreen from './components/MainScreen'
import Article from './components/Article'
import './App.css';

function App() {
  return (
  <>

    <Routes>
      <Route index element={<MainScreen />} />
      <Route path="/article" element={<Article />} />
    </Routes>

  </>
  );
}

export default App;
