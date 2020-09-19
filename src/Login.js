import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://lh3.googleusercontent.com/lV1DhBeSuikQy6fLPhgfNHUxDqterNlur4oB1Z_Yr0NOSiWwQOD0g8gWCjVf1mmMuw'
          alt=''
        />
        <h1>Sign in to Yaniv`s slack clone</h1>
        <p>Don`t worry, it`s 100% safe.</p>
        <Button onClick={signIn}>Sign in with google</Button>
      </div>
    </div>
  );
};

export default Login;
