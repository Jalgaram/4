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
import Login from './components/Login';

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
          <Route path='/TV&Home' element={<TV />}/>
          <Route path='/AirTag' element={<AirTag />}/>
          <Route path='/Acce' element={<Acce />}/>
          <Route path='/Enter' element={<Enter />}/>
          <Route path='/Service' element={<Service />}/>
          <Route path='/Cart' element={<Cart />}/>
          <Route path='/Login' element={<Login />}/>
        </Routes>
      </div>
  );
}

export default App;
