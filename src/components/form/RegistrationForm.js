import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RegistrationForm = () => {
  const { googleSignIn, emailSignUp, emailChange, PasswordChange } = useAuth();
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <h1 className='text-3xl'>Registration Form</h1>
      <form className='flex flex-col'>
        <input
          onBlur={emailChange}
          type='email'
          name=''
          id=''
          placeholder='Email'
          className='h-10 w-80 border-black border-2 mr-4 rounded mt-10'
        />
        <input
          onBlur={PasswordChange}
          type='password'
          name=''
          id=''
          placeholder='Password'
          className='h-10 w-80 border-black border-2 mr-4 rounded mt-10'
        />

        <input
          onClick={emailSignUp}
          type='submit'
          className='px-4 text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover mt-10'
        />
      </form>
      <Link to='/login'>
        <button>Already Have an account?</button>
      </Link>

      <button
        onClick={googleSignIn}
        className=' text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover px-9 mx-5 mt-10'>
        Google
      </button>
      <button className=' text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnHover hover:bg-btnColor px-9 mx-5'>
        github
      </button>
    </div>
  );
};

export default RegistrationForm;
