import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const RegistrationForm = () => {
  const {
    googleSignIn,
    emailChange,
    passwordChange,
    handleRegistrationSubmit,
    error,
    handleNameChange,
  } = useAuth();

  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <h1 className='text-3xl'>Registration Form</h1>
      <form className='flex flex-col' onSubmit={handleRegistrationSubmit}>
        <input
          onBlur={handleNameChange}
          type='name'
          name=''
          id='Name'
          placeholder='Name'
          className='h-10 w-80 border-black border-2 mr-4 rounded mt-10'
        />
        <input
          onBlur={emailChange}
          type='email'
          name=''
          id='email'
          placeholder='Email'
          className='h-10 w-80 border-black border-2 mr-4 rounded mt-10'
        />
        <input
          onBlur={passwordChange}
          type='password'
          name=''
          id='password'
          placeholder='Password'
          className='h-10 w-80 border-black border-2 mr-4 rounded mt-10'
        />

        <button
          type='submit'
          className='px-4 text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover mt-10'>
          Registration
        </button>
      </form>
      <h1 className='text-lg font-bold  text-red-700'>{error}</h1>
      <Link to='/login'>
        <button>Already Have an account?</button>
      </Link>

      <button
        onClick={googleSignIn}
        className=' text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover px-9 mx-5 mt-10'>
        Google
      </button>
    </div>
  );
};

export default RegistrationForm;
