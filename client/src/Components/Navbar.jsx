import React from 'react'
import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";

import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <div className=" container lg:max-w-[924px] md:max-w-[667px] max-w-[400px] border-2 border-black border-solid mx-auto mt-5 py-5 px-3 "> 
      <nav className=" flex md:justify-between justify-start ">
       <p>Trans</p>
        <div className="md:flex justify-between gap-5 hidden">
          <li className="list-none">home</li>
          
        <li className="list-none">send transaction</li>
        <li className="list-none">recent transaction</li>
       

        </div>
         <div className=" flex">
        {!toggle && <TiThMenu className='md:hidden ml-[300px]'  onClick={() => settoggle(true)}/> }
        {toggle && <IoCloseSharp  className='md:hidden w-5  '   onClick={() => settoggle(false)}/>}
        {toggle && (<ul className="flex flex-col h-screen  z-10 top-7 right-5 ">
        <div className="w-full text-3xl mt-[100px] ml-[40px]">
          <li className="list-none  ">home</li>
        <li className="list-none mt-4">send transaction</li>
        <li className="list-none mt-4">recent transaction</li>
        </div>
        </ul>)}
      </div>
        

      </nav>
      
    </div>
  )
}

export default Navbar