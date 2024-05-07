import React, { useState, useRef } from 'react';
import Header from './Header';
import { validateFields } from "../utility/validation";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isNewUser, setNewUser] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);

  const handleSignup = () => {
    setNewUser(!isNewUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data here
  };

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const error = validateFields(emailValue, passwordValue);
    setErrorMessage(error);

    if (error) return;

  
    if (!isNewUser) {
      const auth = getAuth();
       createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`Allready Signup `);
        });
    } 
    else {
      // Logic for handling sign in
      const auth = getAuth();
signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    alert("login Successfully")

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(`wrong login and Password `);


  });
    }
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='z-1 h-[100vh] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      </div>

      <div className="form flex justify-center">
        <form onSubmit={handleSubmit} className='absolute p-12 bg-black  my-36 mx-auto  flex flex-col  bg-opacity-70'>
          <h1 className='text-bold-3xl py-4 text-white font-bold text-2xl'>{isNewUser ? "Log In" : "Sign Up"}</h1>
          {!isNewUser && <input type="text" placeholder='UserName' className='p-3 m-2 bg-gray-600 rounded-lg' autoComplete='false'/>}

          <input ref={email} type="text" placeholder='Email' className='p-3 m-2 bg-gray-600 rounded-lg text-white' autoCorrect='false' />
          
          <input ref={password} type="password" placeholder='Password' className='p-3 m-2 bg-gray-600 rounded-lg text-white' />
          {errorMessage && <p className='text-red-500 pl-3'>{errorMessage}</p>}

          <button onClick={handleButtonClick} className='p-2 m-2  text-white rounded-lg' style={{ background: "rgb(193, 17, 25)" }}>{isNewUser ? "Log In" : "Sign Up"}</button>
          <p className='text-white'>New to Netflix? <button onClick={handleSignup}>{isNewUser ? "Sign Up Now" : "Log In"}</button></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
