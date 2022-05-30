import { React, useEffect } from 'react'
import './NavbarStyle.css';
// import { useMoralis } from "react-moralis";
import logo from '../../images/logo-fl4g.png';

const Navabar = () => {

    // const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         // add your logic here
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isAuthenticated]);

    // const login = async () => {
    //     if (!isAuthenticated) {

    //         await authenticate({ signingMessage: "Log in using wallet account" })
    //             .then(function (user) {
    //                 console.log("logged in user:", user);
    //                 console.log(user.get("ethAddress"));
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     }
    // }

    // const logOut = async () => {
    //     await logout();
    //     console.log("logged out");
    // }

    return (

        <>
            {/* 
      <div isAuthenticated={isAuthenticated} isAuthenticating={isAuthenticating} user={user} authenticate={authenticate} logout={logout} isLoggingOut={isLoggingOut} /> */}

            <div className='navbar-main'>
                <img className='image_class'src={logo} alt="" srcset="" />
                <h3>Home</h3>
                <h3>Product</h3>
                <h3>About Us</h3>

                {/* <button>Connect</button> */}
                {/* <button onClick={login}>Moralis Metamask Login</button>
                <button onClick={logOut} disabled={isAuthenticating}>Logout</button> */}
            </div>

        </>

    )
}
// }

export default Navabar
