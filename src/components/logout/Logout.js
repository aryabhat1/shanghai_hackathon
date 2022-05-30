
import { React, useEffect } from 'react';
import './LogoutStyle.css';
import { useMoralis } from "react-moralis";

const Logout = () => {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    useEffect(() => {
        if (isAuthenticated) {
            // add your logic here
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    // const login = async () => {
    //     if (!isAuthenticated) {

    //         await authenticate({ signingMessage: "Log in using your wallet" })
    //             .then(function (user) {
    //                 console.log("logged in user:", user);
    //                 console.log(user.get("ethAddress"));
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //     }
    // }

    const logOut = async () => {
        await logout();
        console.log("logged out");
    }



    return (
        <div>
            <button className='submit' onClick={logOut} disabled={isAuthenticating}>Logout</button>
        </div>
    )
}

export default Logout;