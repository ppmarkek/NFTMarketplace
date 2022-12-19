import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateAccount from './components/pages/CreateAccount/CreateAccount';
import Home from './components/pages/Home/Home';
import Footer from './components/templates/Footer/Footer';
import NavigationBar from './components/templates/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/CreateAccount' element={<CreateAccount/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
