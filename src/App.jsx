import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import "./scss/detail.scss";
import "./scss/common.scss";
import "./scss/mainMedia.scss"
import "./scss/commonMedia.scss"
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import Detail from './Detail';
import IPhone from './components/IPhone';
import IPad from './components/IPad';
import Mac from './components/Mac';
import Watch from './components/Watch';
import AirPods from './components/AirPods';
import Vision from './components/Vision';
import TV from './components/TV';
import AirTag from './components/AirTag';
import Acce from './components/Acce';
import Enter from './components/Enter';
import Service from './components/Service';
import Cart from './components/Cart';

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/iPhone' element={<IPhone />}/>
          <Route path='/iPad' element={<IPad />}/>
          <Route path='/Mac' element={<Mac />}/>
          <Route path='/Watch' element={<Watch />}/>
          <Route path='/AirPods' element={<AirPods />}/>
          <Route path='/Vision' element={<Vision />}/>
          <Route path='/TV및홈' element={<TV />}/>
          <Route path='/AirTag' element={<AirTag />}/>
          <Route path='/액세서리' element={<Acce />}/>
          <Route path='/엔터테인먼트' element={<Enter />}/>
          <Route path='/고객지원' element={<Service />}/>
          <Route path='/장바구니' element={<Cart />}/>
        </Routes>
      </div>
  );
}

export default App;
