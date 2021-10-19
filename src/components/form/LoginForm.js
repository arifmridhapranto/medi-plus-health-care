import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const { googleSignIn, emailSignIn } = useAuth();

  const handleSubmit = () => {
    e.preventDefault();
  };
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <h1 className='text-3xl'>Please Log IN</h1>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <input
          type='email'
          name=''
          id=''
          placeholder='Email'
          className='h-10 w-80 border-black border-2 mr-4 rounded mt-10'
        />
        <input
          type='password'
          name=''
          id=''
          placeholder='Password'
          className='h-10 w-80 border-black border-2 mr-4 rounded mt-10'
        />

        <input
          onClick={emailSignIn}
          type='submit'
          className='px-4 text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover mt-10'
        />
      </form>
      <div className=''>
        <Link to='/signup'>New User?</Link>
        <button
          onClick={googleSignIn}
          className=' text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover px-9 mx-5 mt-10'>
          Google
        </button>
        <button>github</button>
      </div>
    </div>
  );
};

export default LoginForm;
