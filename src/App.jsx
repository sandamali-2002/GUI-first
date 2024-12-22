import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />npm        
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;