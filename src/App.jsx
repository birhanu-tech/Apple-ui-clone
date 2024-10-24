import React from 'react'
import {Routes,Route} from "react-router-dom";
import "./assets/styles.css"
import "./assets/bootstrap.css"

 import Header from './component/Header';
import Mac from './component/Mac';
import Iphone from './component/Iphone';
import Ipad from './component/Ipad';
import Watch from './component/Watch'
import Tv from './component/Tv';
import Music from './component/Music';
import Support from './component/Support';
import Footer from './component/Footer';
import Main from './component/Main';
import Iphones from './iphone/Iphone';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          
          <Route path="/Mac" element={<Mac />} />
          <Route path="/Iphone" element={<Iphones />} />
          <Route path="/Ipad" element={<Ipad />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/Tv" element={<Tv />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Support" element={<Support />} />
        </Routes>
        {/* <Main/> */}
        <Footer />
        {/* <Iphones/> */}
      </div>
    </>
  );
}

export default App
