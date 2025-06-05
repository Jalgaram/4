import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import "./scss/common.scss";
import CenterSlide from './components/CenterSlide';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import InnerMenu from './components/InnerMenu';
import New from './components/New';
import Sale from './components/Sale';
import Slide from './components/Slide';

function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <InnerMenu />
      <New />
      <CenterSlide />
      <Content />
      <Sale />
      <Footer />
    </div>
  );
}

export default App;
