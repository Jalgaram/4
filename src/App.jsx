import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import "./scss/common.scss";
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Detail from './Detail';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>
      </div>
  );
}

export default App;
