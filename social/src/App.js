import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Kakao from './routes/Kakao';
import Result from './routes/Result';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/kakao' element={<Kakao/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
