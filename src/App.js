
import { React, useState, useEffect } from 'react';
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import Home from './components/landingpage/LandingPage';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Logout from './components/logout/Logout';
import About from './components/about/About';
import Contact from './components/contact/Contact';
// import Home from './components/home/Home';


function App() {

  const [accounts, setAccounts] = useState([]);
  

  // const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     // add your logic here
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthenticated]);

  // const login = async () => {
  //   if (!isAuthenticated) {

  //     await authenticate({ signingMessage: "Log in using Moralis" })
  //       .then(function (user) {
  //         console.log("logged in user:", user);
  //         console.log(user.get("ethAddress"));
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  // }

  // const logOut = async () => {
  //   await logout();
  //   console.log("logged out");
  // }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
      {/* <LandingPage /> */}
      {/* <h1>Moralis Hello World!</h1> */}
      {/* <Navbar /> */}
      <Header />
      <Hero />
      {/* <Logout /> */}
      {/* <button onClick={login}>Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>Logout</button> */}
    </div>
  );
}

export default App;