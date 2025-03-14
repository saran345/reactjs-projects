import React, { useState } from 'react'

export default function FormVal() {

   const [data, setData] =useState([]);

   const handleChange=(e)=>{
      const [name,value]=e.target;
      setData({...data,[name]:value});
   }


  return (
    <>

    <div className="flex p-4 min-h-full items-center justify-center bg-amber-300">
      <div className="p-6 bg-white w-full max-w-md rounded-lg shadow-lg  text-xl sm:text-2xl md:text-1xl lg:text-xl">
        <form className="max-w-lg mx-auto space-y-10">
          <h1>Students Registration Form</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <label className='text-lg font-medium text-gray-600'>FirstName:</label>
        <input type='text'
         name='name'
         value={data.first}
         onChange={handleChange}
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <label className='text-lg font-medium text-gray-600'>LastName:</label>
        <input type='text' name='name' value={data.last} onChange={handleChange}
          /> 
        </div>
        <label>Email:</label>
        <input type='email' name='email' value={data.email} onChange={handleChange}/> <br />
        <label>DOB:</label>
        <input type='date' name='dob' value={data.dob} onChange={handleChange} /><br />
        <label>MobileNumber:</label>
        <input type='text' name='mobile' value={data.mobile} onChange={handleChange} /><br />
        <label>Gender:</label>
        <input type='radio' name='male' value={data.male} onChange={handleChange} />male
        <input type='radio' name='female' value={data.female} onChange={handleChange} />female <br />
        <label>Address:</label>
        <input type='text' name='address' value={data.address} onChange={handleChange} /><br />

         <button>Submit</button>
        </form>

      </div>
    </div>

    </>

)
}
