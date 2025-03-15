import React, {  useState } from 'react'

export default function FormVal() {

   const [data, setData] =useState({
    first: "",
    last: "",
    email: "",
    dob: "",
    mobile: "",
    gender: "",
    address: ""
   });

   const [err,setErr]=useState({});

   const handleChange=(e)=>{
      const {name,value}=e.target;
      setData({...data,[name]:value});
   }
    const validate=()=>{
       const display={};
       if(!data.first.trim()){
          display.first="First is required!"
       }else if(data.first<5){
        display.first="First name is less than 5"
       }
       if(!data.last.trim()){
        display.last="Last is required!"
       }
       if(!data.email.trim()){
        display.email="Email is required!"
       }else if(!/\S+@\S+\.\S+/.test(data.email)){
        display.email="Enter valid Email!"
       }

       if(!data.dob.trim()){
        display.dob="dob is required!"
       }
       if(!data.gender.trim()){
        display.gender="Select the Gender!"
       }
       if(!data.address.trim()){
        display.data="Address is required!"
       }

       if(!data.mobile.trim()){
        display.mobile="Mobile number is required!"
       }

       setErr(display);
       return Object.keys(display).length==0;

    };

     const submitData=()=>{
        if(validate){
          window.alert="Successfully register!"
        }
        setData({first: "",
          last: "",
          email: "",
          dob: "",
          mobile: "",
          gender: "",
          address: ""})
     }

  return (
    <>

    <div className="flex p-4 min-h-full items-center justify-center bg-amber-300">
      <div className="p-6 bg-white w-full max-w-md rounded-lg shadow-lg  text-xl sm:text-2xl md:text-1xl lg:text-xl">
        <form className="max-w-lg mx-auto space-y-10" onClick={submitData}>
          <h1 className='text-center'>Students Registration Form</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <label className='text-lg font-medium text-gray-600'>FirstName:</label>
        <input type='text'
         name='first'
         value={data.first}
         onChange={handleChange}
         className='w-full text-gray-600 text-lg border rounded-md outline-blue-600'
          />
          {err.first &&<p className='text-red-600'>{err.first}</p>}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <label className='text-lg font-medium text-gray-600'>LastName:</label>
        <input type='text'
         name='last'
         value={data.last}
         onChange={handleChange}
         className='w-full text-gray-600 text-lg border rounded-md outline-blue-600'
          />
           {err.last &&<p className='text-red-600'>{err.last}</p>}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <label className='text-lg font-medium text-gray-600'>Email:</label>
        <input type='email'
        name='email'
        value={data.email}
        onChange={handleChange}
        className='w-full text-gray-600 text-lg border rounded-md outline-blue-600'/>
         {err.email &&<p className='text-red-600'>{err.email}</p>}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <label className='text-lg font-medium text-gray-600'>DOB:</label>
        <input type='date' name='dob' value={data.dob} onChange={handleChange}
        className='w-full text-gray-600 text-lg border rounded-md outline-blue-600'
        />
         {err.dob &&<p className='text-red-600'>{err.dob}</p>}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <label className='text-lg font-medium text-gray-600'>MobileNumber:</label>
        <input type='text' name='mobile' value={data.mobile} onChange={handleChange}
        className='w-full text-gray-600 text-lg border rounded-md outline-blue-600'
        />
         {err.mobile &&<p className='text-red-600'>{err.mobile}</p>}
        </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 items-center'>
       <label className='text-lg font-medium text-gray-600'>Gender:</label>
        <div className='flex items-center gap-4'>
          <label className='flex items-center gap-4'>
          <input type='radio' name='gender' value="male" checked={data.gender === "male"} onChange={handleChange} className='w-4 h-4' />male
          </label>
          <label className='flex items-center gap-4'>
          <input type='radio' name='gender' value="female" checked={data.gender === "female"}  onChange={handleChange} className='w-4 h-4' />female <br />
          </label>
          {err.gender &&<p className='text-red-600'>{err.gender}</p>}
        </div>
       </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
       <label className='text-lg font-medium text-gray-600'>Address:</label>
       <input type='text' name='address' value={data.address} onChange={handleChange}
       className='w-full text-gray-600 text-lg border rounded-md outline-blue-600'
       />
        {err.address &&<p className='text-red-600'>{err.address}</p>}
       </div>

         <button type='submit' className='w-full py-3 px-4 tracking-wide rounded-lg text-white bg-blue-600  hover:bg-blue-800 focus:outline-none' >Submit</button>
        </form>

      </div>
    </div>

    </>

)
}
