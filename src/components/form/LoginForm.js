import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const { googleSignIn, handleLoginSubmit, error } = useAuth();

  const location = useLocation();
  const redirect_uri = location?.state?.from || "/home";
  const history = useHistory();

  const handleGoogleLogIn = () => {
    googleSignIn().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <h1 className='text-3xl'>Please Log IN</h1>
      <form className='flex flex-col' onSubmit={handleLoginSubmit}>
        <input
          type='email'
          name=''
          id='email'
          placeholder='Email'
          className='h-10 w-80 border-black border-2 mr-4 rounded mt-10'
        />
        <input
          type='password'
          name=''
          id='password'
          placeholder='Password'
          className='h-10 w-80 border-black border-2 mr-4 rounded mt-10'
        />

        <button
          type='submit'
          className='px-4 text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover mt-10'>
          Submit
        </button>
      </form>
      <h1>{error}</h1>
      <div className=''>
        <Link to='/signup'>New User?</Link>
        <button
          onClick={handleGoogleLogIn}
          className=' text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover px-9 mx-5 mt-10'>
          Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
