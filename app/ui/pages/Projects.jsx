import React, { useEffect } from 'react'
import AOS  from 'aos'
import 'aos/dist/aos.css'

export const Projects = () => {
    useEffect(() => {
        AOS.init({
          delay: 200,
          duration: 1200,
          once: false,
        }, [])
      
       }) 
      
  return (
      <> 
    <section id="services" className="bg-gray-50 pt-20 pb-28 px-8">
    <div className="max-w-6xl mx-auto">
    
        <div className="text-center mt-20" data-aos="fade-up">
            <h1 className="text-6xl text-gray-800">Projects</h1>
            <p className="pt-2 text-xl">Coming Projects.</p>
        </div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <div className="relative">
                <div
                    className="absolute z-10 inset-0 bg-cyan sm:rounded-lg">
                </div>
                
                <div className="relative z-20 bg-white h-full rounded-md shadow-md" data-aos="fade-right">
                    <img src="https://www.rouge-media.com/wp-content/uploads/2019/05/web-app-illustration-1.png"
                        className="rounded-t-md" alt=""/>
                    <div className="px-10 pb-6">
                        <h2 className="pt-3 font-bold text-2xl text-gray-800">weTour app</h2>
                        <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
                            perferendis corporis
                            culpa doloremque, amet ipsa!</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div
                    className="absolute z-10 inset-0 bg-cyan sm:rounded-lg">
                </div>
                <div className="relative z-20 bg-white h-full rounded-md shadow-md" data-aos="fade-down">
                    <img src="https://wichitawebdev.com/lmg-cms/wp-content/uploads/2018/06/pwa-reliable.png"
                        className="rounded-t-md bg-blue-200" alt=""/>
                    <div className="px-10 pb-6">
                        <h2 className="pt-3 font-bold text-2xl text-gray-800">eComprice app</h2>
                        <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
                            perferendis corporis
                            culpa doloremque, amet ipsa!</p>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div
                    className="absolute z-10 inset-0 bg-cyan sm:rounded-lg">
                </div>
                <div className="relative z-20 bg-white h-full rounded-md shadow-md" data-aos="fade-left">
                    <img src="https://wichitawebdev.com/lmg-cms/wp-content/uploads/2018/06/pwa-reliable.png"
                        className="rounded-t-md servicesImageHeight" alt=""/>
                    <div className="px-10 pb-6">
                        <h2 className="pt-3 font-bold text-2xl text-gray-800">Ecole app</h2>
                        <p className="pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
                            perferendis corporis
                            culpa doloremque, amet ipsa!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
  )
}
