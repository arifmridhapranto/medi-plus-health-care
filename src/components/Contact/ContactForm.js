import React from "react";

const ContactForm = () => {
  return (
    <div className='mt-20 flex flex-col justify-center items-center'>
      <h1 className='text-center text-4xl'>Feel Free to Contact Us</h1>
      <form>
        <div className='my-5'>
          <input
            type='text'
            name=''
            id=''
            placeholder='First Name'
            className='h-10 w-80 border-black border-2 mr-4 rounded'
          />
          <input
            type='text'
            name=''
            id=''
            placeholder='Last Name'
            className='h-10 w-80 border-black border-2 rounded'
          />
        </div>
        <div className='my-5'>
          <input
            type='email'
            name=''
            id=''
            placeholder='Email'
            className='h-10 w-80 border-black border-2 mr-4 rounded'
          />
          <input
            type='number'
            name=''
            id=''
            placeholder='Phone Number'
            className='w-80 h-10 rounded border-black border-2'
          />
        </div>
        <div className='my-5'>
          <input
            type='text'
            name=''
            id=''
            placeholder='Your Message'
            className='w-80 border-black border-2 h-20 rounded'
          />
        </div>
        <input
          type='submit'
          className='px-4 text-lg font-semibold border border-gray-900 rounded-lg py-1  text-white bg-btnColor hover:bg-btnHover'
        />
      </form>
    </div>
  );
};

export default ContactForm;
