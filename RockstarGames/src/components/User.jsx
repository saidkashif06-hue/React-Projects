import React, { useState } from 'react'
import UserBox from './UserBox'
import { help } from '../assets'
import index from 'toastify'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import { toast } from 'react-toastify'

const User = ({ setUser, signIn, setSignIn }) => {

    const navigate = useNavigate()
    const { t } = useTranslation()
    const [userMenu, setUserMenu] = useState(false)
    const [language, setLanguage] = useState('English')
    const [showHelp, setShowHelp] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('token');
        setSignIn(false);
         toast.success('Logout Successfully');
        window.location.href='/signin';
    };
    return (
        <div className='absolute '>
            <div>
                <div className={`absolute w-78 h-48 mt-7 -ml-65   bg-primary/85  ${showHelp ? 'rounded-t-xl' : 'rounded-xl'}`}>


                    <ul className='flex flex-col   items-start '>

                        <div className='w-full cursor-pointer h-16 hover:bg-gray-700 hover:rounded-t-xl cursor-pointer  '>


                            {
                                signIn ? (
                                    <li
                                        onClick={() => setUser(false)}
                                        className='relative flex justify-between items-center w-full left-0 ml-4'
                                    >
                                        <div
                                            onClick={handleLogout}
                                               
                                                
                                        
                                            className='flex w-60 h-16 py-3'
                                        >
                                            <button className='text-white text-lg font-poppins font-semibold tracking-wide cursor-pointer'>
                                                Logout
                                            </button>
                                        </div>

                                        <i
                                            onClick={() => setUserMenu(false)}
                                            className='ri-close-fill text-white text-lg pr-10 cursor-pointer'
                                        ></i>
                                    </li>
                                ) : (
                                    <li
                                        onClick={() => setUser(false)}
                                        className='relative flex justify-between items-center w-full left-0 ml-4'
                                    >
                                        <div
                                            onClick={() => {
                                                window.location.href = '/signin';
                                            }}
                                            className='flex w-60 h-16 py-3'
                                        >
                                            <button className='text-white text-lg font-poppins font-semibold tracking-wide cursor-pointer'>
                                                {t('signIn')}
                                            </button>
                                        </div>

                                        <i
                                            onClick={() => setUserMenu(false)}
                                            className='ri-close-fill text-white text-lg pr-10 cursor-pointer'
                                        ></i>
                                    </li>
                                )
                            }

                        </div>
                        {!signIn && <div onClick={() => { setUser(false), window.location.href = '/signup' }} className='w-full cursor-pointer h-16 border border-gray-700 hover:bg-gray-700  cursor-pointer  '>
                            <li className='w-full left-0 mt-5 ml-4'><button className='text-white text-lg font-poppins font-semibold tracking-wide cursor-pointer '>{t('signUp')} </button></li>
                        </div>}
                        <div className={`w-full cursor-pointer h-16  hover:bg-gray-700 hover:rounded-b-xl   cursor-pointer`}>
                            <li onClick={() => { setShowHelp(!showHelp) }} className=' flex justify-between px-5.5 w-full py-4   '>
                                <button className='text-white text-lg font-poppins font-semibold tracking-wide cursor-pointer '>Help</button>
                                <i className='ri-arrow-down-s-line text-white text-xl'></i>
                            </li>

                        </div>
                        {showHelp && <div className='absolute bg-black w-78 mt-48  h-76.5 '>


                            {
                                help.map((item, index) => (
                                    <div className={` ${index % 2 === 0 ? 'border border-gray-700' : ''} cursor-pointer`}>
                                        <li key={index} className='px-5 py-4 hover:bg-gray-700'>
                                            <p className='text-white text-lg font-inter font-medium tracking-wide'>{item}</p>
                                        </li>
                                    </div>
                                ))
                            }


                        </div>}

                    </ul>


                </div>

                <div className='relative '>
                    <div onClick={() => { setUserMenu(!userMenu), setShowHelp(false) }} className={`absolute w-78 h-15 bg-primary/85   -ml-65 ${showHelp ? 'mt-136' : 'mt-58'} ${userMenu ? 'rounded-none' : 'rounded-lg'}`}>
                        <div className='flex items-center justify-between px-5 cursor-pointer hover:bg-gray-700 hover:rounded-lg'>
                            <div className='flex items-center py-4  gap-1.5'>
                                <i className='ri-global-fill text-white text-xl'></i>
                                <p className='text-white font-semibold font-inter text-lg'>{language}</p>

                            </div>
                            <div>
                                <i className='ri-arrow-down-s-line text-white text-xl '></i>
                            </div>
                        </div>
                    </div>
                </div>
                {userMenu && <UserBox language={language} showHelp={showHelp} setUserMenu={setUserMenu} setLanguage={setLanguage} />}
            </div>
        </div>
    )
}

export default User
