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
       }else if(data.first.length<5){
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
        display.address="Address is required!"
       }

       if(!data.mobile.trim()){
        display.mobile="Mobile number is required!"
       }

       setErr(display);
       return Object.keys(display).length==0;

    };

     const submitData=(e)=>{
      e.preventDefault();
        if(validate()){
          window.alert("Successfully register!")
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
      <div className="p-6 bg-white w-full max-w-xl rounded-lg shadow-lg  text-xl sm:text-2xl md:text-2xl lg:text-xl">
        <form className="max-w-lg mx-auto space-y-10" onSubmit={submitData}>
          <h1 className='text-center text-blue-800 font-semibold text-3xl'>Students Registration Form</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
        <label className='text-2xl text-indigo-600 font-medium '>FirstName:</label>
        <div>
        <input type='text'
         name='first'
         value={data.first}
         onChange={handleChange}
         className='w-full text-gray-600 text-lg border rounded-md outline-blue-600 py-1'
          />{err.first &&<p className='text-sm text-red-600 '>{err.first}</p>}
        </div>
        </div> 
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
        <label className='text-2xl text-indigo-600 font-medium '>LastName:</label>
        <div>
        <input type='text'
         name='last'
         value={data.last}
         onChange={handleChange}
         className='w-full text-gray-600 text-lg border rounded-md outline-blue-600 py-1'
          />
           {err.last &&<p className='text-sm text-red-600'>{err.last}</p>}
        </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
        <label className='text-2xl text-indigo-600 font-medium '>Email:</label>
        <div>
        <input type='email'
        name='email'
        value={data.email}
        onChange={handleChange}
        className='w-full text-gray-600 text-lg border rounded-md outline-blue-600 py-1'/>
         {err.email &&<p className='text-sm text-red-600'>{err.email}</p>}
        </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-1'>
        <label className='text-2xl text-indigo-600 font-medium '>DOB:</label>
       <div>
       <input type='date' name='dob' value={data.dob} onChange={handleChange}
        className='w-full text-gray-600 text-lg border rounded-md outline-blue-600 py-1'
        />
         {err.dob &&<p className='text-sm text-red-600'>{err.dob}</p>}
       </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
        <label className='text-2xl text-indigo-600 font-medium '>MobileNumber:</label>
        <div>
        <input type='text' name='mobile' value={data.mobile} onChange={handleChange}
        className='w-full text-gray-600 text-lg border rounded-md outline-blue-600 py-1'
        />
         {err.mobile &&<p className='text-sm text-red-600'>{err.mobile}</p>}
        </div>
        </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 items-center'>
       <label className='text-2xl text-indigo-600 font-medium '>Gender:</label>
        <div className='flex items-center gap-4'>
          <label className='flex items-center gap-4 text-indigo-600 font-semibold' >
          <input type='radio' name='gender' value="male" checked={data.gender === "male"} onChange={handleChange} className='w-4 h-4' />male
          </label>
          <label className='flex items-center gap-4 text-indigo-600 font-semibold'>
          <input type='radio' name='gender' value="female" checked={data.gender === "female"}  onChange={handleChange} className='w-4 h-4' />female <br />
          </label>
          {/* {err.gender &&<p className='text-sm text-red-600'>{err.gender}</p>} */}
        </div>
       </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
       <label className='text-2xl text-indigo-600 font-medium '>Address:</label>
      <div>
      <input type='text' name='address' value={data.address} onChange={handleChange}
       className='w-full text-gray-600 text-lg border rounded-md outline-blue-600 py-1'
       />
        {err.address &&<p className='text-sm text-red-600'>{err.address}</p>}
      </div>
       </div>

         <button type='submit' className='w-full py-3 px-4 tracking-wide rounded-lg text-white bg-blue-600  hover:bg-blue-800 focus:outline-none' >Submit</button>
        </form>

      </div>
    </div>

    </>

)
}
