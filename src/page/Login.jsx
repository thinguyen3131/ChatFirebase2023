import React from 'react';
import Add from "../img/addAvatar.png";
import LOGO from "../img/Logo_Vio_New.svg";

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo"><img src={LOGO} alt="" /></span>
            <span className="Title">Login</span>
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button>Sign Up</button>
            </form>
            <p>You don't have an account ? Register</p>
        </div>
    </div>
  )
}

export default Register