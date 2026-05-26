import React, { useEffect, useState } from 'react'
import { assets } from '../assets'
import { useNavigate,Link } from 'react-router-dom'
import GameDropMenu from './GameDropMenu'
import GetSearch from './GetSearch'
import User from './User'


const Navbar = ({signIn,setSignIn}) => {
  const [user,setUser] = useState(false)
    const navigate = useNavigate()
    const [showIcon,setShowIcon] = useState(false)
    const [search, setSearch]= useState(false)

  
    
  return (
     <nav className={`relative flex justify-between px-15  gap-30 z-60  items-center  w-full h-23   ${showIcon ?'bg-primary': ''} ${search ? 'bg-primary' : '' }`}>

      {
        showIcon || search
        ?<a href="/"><img
        src={assets.logo}
        className='w-10 h-10 cursor-pointer hover:scale-104 '
       
       
      /></a>: <a href="/"><img
        src={assets.black_logo}
        className='w-10 h-10 cursor-pointer hover:scale-104 '
       
       
      /></a>

      }

      {/* Links */}
      <div className=' flex ' >
     
      <div className=' flex flex-col'>
          <button onClick={()=>{setShowIcon(!showIcon),setSearch(false)}} className={`flex items-center gap-1 cursor-pointer text-primary text-lg  font-poppins font-medium px-4   rounded-full hover:bg-gray-200 transition-all duration-300 ${showIcon ?'text-white hover:bg-gray-600': ''} ${search ?'text-white hover:bg-gray-600': ''} `}><span>Games</span> {showIcon ?<i className='  ri-arrow-up-s-line -ml-1 py-1 text-xl mt-0.5 inline-block '></i> 
        
        :<i className='  ri-arrow-down-s-line -ml-1 py-1 text-xl mt-0.5 inline-block '></i> } </button>

        {showIcon && <GameDropMenu setShowIcon={setShowIcon}  />}
      </div>
     
     
     
      <Link className={`text-primary text-lg  font-poppins font-medium px-4 py-1.5  rounded-full hover:bg-gray-200 transition-all duration-300 text-primary text-lg  font-poppins font-medium px-4 py-1.5  rounded-full hover:bg-gray-200 transition-all duration-300 ${search ?'text-white hover:bg-gray-600': ''}  ${showIcon ?'text-white hover:bg-gray-600': ''}`} to='/newswire ' >NewsWire</Link>
      <Link className={`text-primary text-lg  font-poppins font-medium px-4 py-1.5  rounded-full hover:bg-gray-200 transition-all duration-300 ${showIcon ?'text-white hover:bg-gray-600': ''} ${search ?'text-white hover:bg-gray-600': ''}`} to='/videos' >Videos</Link>
      <Link className={`text-primary text-lg  font-poppins font-medium px-4 py-1.5  rounded-full hover:bg-gray-200 transition-all duration-300 ${showIcon ?'text-white hover:bg-gray-600': ''} ${search ?'text-white hover:bg-gray-600': ''}`} to='/downloads' >Downloads</Link>
      <Link className={`flex items-center gap-1.5 text-primary text-lg  font-poppins font-medium px-4   rounded-full hover:bg-gray-200 transition-all duration-300  ${showIcon ?'text-white hover:bg-gray-600': ''} ${search ?'text-white hover:bg-gray-600': ''}`} to='/store' ><span>Store</span><i className={`ri-arrow-right-up-line -ml-1 py-1 text-lg mt-0.5 inline-block ${showIcon ?'text-white hover:bg-gray-600': ''}`}></i></Link>
      <Link className={`flex items-center gap-1.5 text-primary text-lg  font-poppins font-medium px-4   rounded-full hover:bg-gray-200 transition-all duration-300 ${showIcon ?'text-white hover:bg-gray-600': ''} ${search ?'text-white hover:bg-gray-600': ''}`} to='/support' ><span>Support</span><i className={`ri-arrow-right-up-line -ml-1 py-1 text-lg mt-0.5 inline-block ${showIcon ?'text-white hover:bg-gray-600': ''} `}></i></Link>
      </div>

      <div className='flex gap-6'>
        <button className={`text-primary px-3.5 py-1 rounded-full hover:bg-gray-300 border border-gray-500 cursor-pointer text-md font-semibold tracking-tight font-inter ${search ?'text-white hover:bg-gray-600': ''}  ${showIcon ?'text-white hover:bg-gray-600': ''}`}>Get Launcher</button>
        <button onClick={()=>{setSearch(!search),setShowIcon(false),setUser(false)}} className={`cursor-pointer px-2.5  rounded-full hover:bg-gray-200  ${showIcon ?'text-white hover:bg-gray-600': '' } ${search ?'text-white hover:bg-gray-600': ''}`}>
          <i className='ri-search-line text-lg'></i>
         
        </button>
         {search && <GetSearch search={search} setSearch={setSearch} />}
        <div className='relative'>
          <button onClick={()=> {setUser(!user),setSearch(false),setShowIcon(false)}} className={`cursor-pointer px-2.5 py-1 rounded-full hover:bg-gray-200 ${search ?'text-white hover:bg-gray-600': ''}  ${showIcon ?'text-white hover:bg-gray-600': ''}`}>
          <i className='ri-user-line text-lg'></i>
          </button>
        {user && <User setUser={setUser} signIn={signIn} setSignIn={setSignIn} />}
        </div>
      </div>

    </nav>
  )
}

export default Navbar
