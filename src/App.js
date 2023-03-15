import { Route, Routes } from 'react-router-dom';

import './App.css';
import Article from './components/Article';
import MainScreen from './components/MainScreen';

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
