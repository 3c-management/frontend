import React,{useState} from 'react';
import './global.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu'
import Submit from './pages/Submit/Submit';
const App: React.FC = () => {
  const [modalData, setModalData] = useState<boolean | null>(null);
  const handleDataFromChild = (data: boolean) => {
    setModalData(data);
    console.log(1);
  };
  return (
   <div>
    <div className={`${modalData ? 'modalBlur' : ''}`}></div>
    <HamburgerMenu/>
    <Routes>
      <Route path='/' element={<Home onDataFromModal={handleDataFromChild}/>}/>
      <Route path='/submit' element={<Submit/>}/>
    </Routes>
   </div>
  );
}

export default App;
