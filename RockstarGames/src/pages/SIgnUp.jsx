import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const SIgnUp = () => {
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

   const handleSubmit =async (e)=>{
    e.preventDefault()

    try {
      const result = await axios.post('http://localhost:3000/signup',{name,email,password})
     
      console.log(result.data)
      if(result.data.success){
        toast.success(result.data.message)

       setTimeout(() => {
      window.location.href = '/signin'
    }, 1500)
      }else{
        toast.error(result.data.message)
      }
      
    } catch (error) {
        console.log(error)
       
    }
   }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center overflow-hidden relative px-4 py-15">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-100 rounded-full blur-3xl opacity-70 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-gray-200 rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/80 border border-gray-200 shadow-2xl rounded-3xl p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-black">
              Create Account
            </h1>
            <p className="text-gray-500 mt-2">
              Join thousands of players and start your journey.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input required onChange={(e)=>setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-black transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input required onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-black transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="relative mt-2">
                <input required onChange={(e)=>setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:border-black transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  <i
                    className={
                      showPassword
                        ? "ri-eye-off-line text-lg"
                        : "ri-eye-line text-lg"
                    }
                  />
                </button>
              </div>
            </div>

            {/* Password Strength */}
            <div>
              <div className="flex gap-2">
                <span className="h-1 flex-1 rounded-full bg-black" />
                <span className="h-1 flex-1 rounded-full bg-black" />
                <span className="h-1 flex-1 rounded-full bg-gray-300" />
                <span className="h-1 flex-1 rounded-full bg-gray-300" />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Use at least 8 characters with letters and numbers.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-gray-500">
              Already have an account?{" "}
              <span onClick={()=>window.location.href='/signin'} className="text-black font-semibold cursor-pointer hover:underline">
                Sign In
              </span>
            </p>
          </div>
        </div>

        {/* Small Stats */}
        <div className="flex justify-center gap-4 mt-6">
          <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
            <p className="text-lg font-bold">10M+</p>
            <p className="text-xs text-gray-500">Members</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
            <p className="text-lg font-bold">150+</p>
            <p className="text-xs text-gray-500">Countries</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm">
            <p className="text-lg font-bold">24/7</p>
            <p className="text-xs text-gray-500">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SIgnUp
