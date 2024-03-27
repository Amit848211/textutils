import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const[myStyle,setmyStyle]=useState({
        color:"black",
        backgroundColor:"white"
    })
    const[btnText,setbtnText]=useState("Enable Dark Mode")
    const toggleStyle = ()=>{
        if(myStyle.color==="black"){
            setmyStyle({
                color:"white",
                backgroundColor:"black"
            })
            setbtnText("Enable Light Mode")
        }
        else{
            setmyStyle({
                color:"black",
                backgroundColor:"white"
            })
            setbtnText("Enable Dark Mode")
        }
    }
  return (
    <>
       <div className="bg-white w-[100vw] h-16 flex px-16 items-center justify-between">
       <div className="flex items-center gap-6">
        <h1 className="text-2xl text-blue-500">TextUtils</h1>
        <div>
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            

                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-black" : "text-gray-500"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            
                        </ul>
        </div>
       </div>
        <div>
            <button onClick={toggleStyle}
            className="w-40 h-10 bg-green-500">{btnText}</button>
        </div>
    </div>
    </>
    
  )
}

export default Navbar