import React from "react";
import useAuth from "../../hooks/useAuth";

const RegistrationForm = () => {
  const { googleSignIn } = useAuth();
  return (
    <div>
      <h1>registration form</h1>
      <form>
        <input
          type='email'
          name=''
          id=''
          placeholder='Email'
          className='h-10 w-80 border-black border-2 mr-4 rounded'
        />
        <input
          type='password'
          name=''
          id=''
          placeholder='Password'
          className='h-10 w-80 border-black border-2 mr-4 rounded'
        />

        <input
          type='submit'
          className='px-4 text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover'
        />
      </form>
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
