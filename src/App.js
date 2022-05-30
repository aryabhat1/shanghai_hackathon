
import { React, useState, useEffect } from 'react';
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useMoralis } from "react-moralis";
import Home from './components/landingpage/LandingPage';
// import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
// import Logout from './components/logout/Logout';
// import About from './components/about/About';
// import Contact from './components/contact/Contact';
import History from './components/history/History';



function App() {

  // const [accounts, setAccounts] = useState([]);


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
      <Header />
      <Hero />
      <History />

    </div>
  );
}

export default App;