import React, { useState } from 'react'
import {assets} from "../assets/assets"
import { NavLink, useNavigate } from 'react-router-dom'

const NavBar = () => {

const navigate =useNavigate();

const [showMenu,setShowMenu]=useState(false);
const [token,setToken]=useState(true);
  const [open, setOpen] = useState(false);


  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400 '>
        <NavLink to='/'>
          <img className=' w-56' src={assets.logo} alt="#" />       
            </NavLink>
        <ul className='hidden md:flex items-start gap-7 font-medium'>
            <NavLink to='/'>
                <li className='py-1' >HOME</li>
                <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden'/> 
            </NavLink>
            <NavLink to='/doctor'>
                <li className='py-1 '>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden'/> 
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token
                ? <div
      className="flex items-center gap-2 cursor-pointer relative"
      onClick={() => setOpen(!open)}
    >
      <img className="w-10 rounded-full" src={assets.profile_pic} alt="#" />
      <img className="w-2.5" src={assets.dropdown_icon} alt="#" />

      {open && (
        <div className="absolute top-0 right-0 pt-15 text-base font-medium text-gray-600 z-20  ">
         <div className='min-w-44 bg-stone-100 rounded flex flex-col  '>
              <p onClick={()=>navigate('my-profile')} className="px-4 border-1 border-gray-300 py-2 hover:text-black hover:bg-stone-200 cursor-pointer">My Profile</p>
              <p onClick={()=>navigate('/my-appointments')}className="px-4 py-2 border-1 border-gray-300 hover:text-black  hover:bg-stone-200 cursor-pointer">My Appointments</p>
              <p onClick={()=>setToken(false)}className="px-4 py-2 hover:text-black border-1 border-gray-300  hover:bg-stone-200 cursor-pointer">Logout</p>
         </div>
        </div>
      )}
    </div>
                :<button onClick={()=>navigate('/login')} className='bg-[#5f6FFF] text-white px-8  py-3 rounded-full font-light hidden md:block  '> Create Account</button>
            }
        </div>
    </div>
  )
}

export default NavBar