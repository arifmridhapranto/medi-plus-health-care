import React from "react";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const { googleSignIn } = useAuth();
  return (
    <div className='h-screen flex justify-center items-center flex-col'>
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
      <div className=''>
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
