import './App.css';
import React, { useState, useEffect } from 'react'
import Topbar from './components/Topbar';
import SidebarMenu from './components/SidebarMenu';
import Contents from './components/Contents';
import data from './data';

function App() {

  
  const [product, setproduct] = useState(data)
  
  


  return (
    <div className="App">

      {/* Topbar */}
      <Topbar />

      {/* left sidebar features */}
      <SidebarMenu product={product} setproduct={setproduct} />

      {/* right sidebar features */}
      <Contents product={product} setproduct={setproduct}/>

      
    </div>
  );
}

export default App;
