import React from 'react'
import { languages } from '../assets'
import { useTranslation } from 'react-i18next'


const UserBox = ({setLanguage,language,setUserMenu,}) => {
     const { t, i18n } = useTranslation()
  return (
    <div className={`absolute bg-black w-78 mt-72 z-50 h-153   -ml-65  `}>
      

      <ul className=' absolute w-full he-full  '>


        {languages.map((lang,index)=>(

            <li onClick={()=>{i18n.changeLanguage(lang.code), setLanguage(lang.name),setUserMenu(false)}} key={index} className={`py-4 hover:bg-gray-700 cursor-pointer transition-all duration-300 ease-in-out  ${index === 0 ? 'rounded-t-xl' : ''}  ${index % 2 === 0 ? 'border border-gray-700' : ''}`
           }>
            <button  className='text-white text-lg font-inter font-semibold tracking-wider cursor-pointer ml-6'>{lang.name}</button>
            </li>

        ))}
         
     
      </ul>

    </div>
  )
}

export default UserBox 



