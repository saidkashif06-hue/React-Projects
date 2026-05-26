import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignIn = ({setSignIn, signIn}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        'http://localhost:3000/signin',
        { email, password }
      );

      if (result.data.success) {
        localStorage.setItem('token',result.data.token)
        
        toast.success(result.data.message);

        

        

        setTimeout(() => {
         window.location.href = '/';
        }, 1500);

        



      } else {
        toast.error(result.data.message);
      }

    try {
  const result = await axios.get(
    'http://localhost:3000/profile',
    {
      headers: {
        token: localStorage.getItem('token')
      }
    }
  );

  console.log(result.data);

} catch (error) {
  console.log(error);
}

    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

 

  return (
    <section className="min-h-screen bg-[#0f0f0f] flex items-center py-15 justify-center px-4 overflow-hidden relative">

      {/* Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gray-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gray-500/10 rounded-full blur-3xl" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">

        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_0_60px_rgba(255,255,255,0.05)]">

          {/* Header */}
          <div className="mb-8">
            <p className="text-gray-400 text-sm tracking-[3px] uppercase">
              Welcome Back
            </p>

            <h1 className="text-white text-4xl font-bold mt-2">
              Sign In
            </h1>

            <p className="text-gray-500 mt-3">
              Access your account and continue your journey.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="text-gray-300 text-sm">
                Email Address
              </label>

              <input onChange={(e)=>setEmail(e.target.value)}
                type="email"
                required
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-white/5  border border-white/10 text-white outline-none focus:border-white/40 transition-all"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">
                Password
              </label>

              <div className="relative mt-2">
                <input onChange={(e)=>setPassword(e.target.value)}
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter password"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-white/40 transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <i
                    className={
                      showPassword
                        ? 'ri-eye-off-line text-lg'
                        : 'ri-eye-line text-lg'
                    }
                  />
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-white"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-gray-300 hover:text-white transition"
              >
                Forgot Password?
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-white text-black cursor-pointer font-semibold hover:bg-gray-200 transition-all duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <span onClick={() => window.location.href = '/signup'} className="text-white cursor-pointer hover:underline">
                Sign Up
              </span>
            </p>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="flex justify-center gap-3 mt-5">

          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            <p className="text-white font-bold">10M+</p>
            <p className="text-xs text-gray-500">Players</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            <p className="text-white font-bold">150+</p>
            <p className="text-xs text-gray-500">Countries</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3">
            <p className="text-white font-bold">24/7</p>
            <p className="text-xs text-gray-500">Support</p>
          </div>

        </div>
      </div>
    </section>
  )

}

export default SignIn
