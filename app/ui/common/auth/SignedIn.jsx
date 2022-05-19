import React, { useEffect } from 'react'
import AOS  from 'aos'
import 'aos/dist/aos.css'

export const SignedIn = () =>{
 useEffect(() => {
  AOS.init({
    delay: 200,
    duration: 1200,
    once: false,
  }, [])

 }) 

  return (
    <>
    
          <div className="bg-gray-100 min-h-screen flex items-center justify-center px-16">
          <div className="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-72  h-72 bg-purple-300 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
            <div className="m-8 relative space-y-4">
            
            <div className="selection: text-white font-medium  selection:text-white" data-aos="fade-up">
            <div className="h-full w-100 flex justify-center items-center mt-8">
              <div className="px-80 pt-10 pb-0 flex-1">
                <div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                  <div className="relative h-48 bg-cyan-500 rounded-bl-4xl">
                    <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                  </div>
                  <div className="px-10 pt-4 pb-8 bg-transparent rounded-tr-4xl">
                    <h1 className="text-2xl font-semibold text-gray-900">Welcome back!</h1>
                    <form className="mt-12" action="" method="POST">
                      <div className="relative">
                        <input 
                        id="email" 
                        name="email" 
                        type="text" 
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-600" 
                        placeholder="john@doe.com" />
                        <label 
                        htmlFor="email" 
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email address</label>
                      </div>
                      <div className="mt-10 relative">
                        <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-600" 
                        placeholder="Password" />
                        <label 
                        htmlFor="password" 
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                      </div>
          
                      <input 
                      type="sumbit" 
                      value="Sign in" 
                      className="mt-20 px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-fill-opacity-80 cursor-pointer" />
                    </form>
                    <a href="#" 
                    className="mt-4 block text-sm text-center font-medium text-cyan-600 hover:underline focus:outline-none focus:ring-2 focus:ring-cyan-500"> Forgot your password? </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
               
          </div>
         
           
              </div>
            </div>
        
   
    </>
  )
}