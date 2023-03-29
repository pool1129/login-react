import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './routes/Login';
import Result from './routes/Result';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
