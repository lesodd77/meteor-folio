import React, { useState, useEffect } from 'react'
import { Meteor } from 'meteor/meteor';
import { ErrorAlert } from './ErrorAlert';
import { SuccessAlert } from './SuccessAlert';

import AOS  from 'aos'
import 'aos/dist/aos.css'

export const Contact = () => {
  const [name, setName] = useState(''); // Formik
  const [subject, setSubject] = useState(''); 
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

 const showError = ({ message }) => {
   setError(message);
   setTimeout(() => {
     setError('');
   }, 5000);
 }

 const showSuccess = ({ message }) => {
  setSuccess(message);
  setTimeout(() => {
    setSuccess('');
  }, 5000);
}


const saveContact = () => {
  Meteor.call('contacts.insert', { name, email, subject, message }, (errorResponse) => {
    if(errorResponse) {
      showError({ message: errorResponse.error });
    } else {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      showSuccess({ message: "Contact saved." });
    }
  });
}


  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    }, [])
  
   }) 
  
  return (
    <>
    <section id="contact" className="pt-10 pb-36 px-8 bg-gray-50 rounded">
    <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mt-20" data-aos="fade-left">
    Contact Us
   </h2>
 
    <div className="relative py-4">
    
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-100" data-aos="fade-up"/>
    </div>
  </div>
    </div>
    <div className="relative max-w-4xl mx-auto">
        
        <div className="relative z-20 bg-gray-50 rounded p-8">
            <form action="" data-aos="fade-up">
            {error && <ErrorAlert message={error} />}
            {success && <SuccessAlert message={success} />}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <input 
                    type="text"

                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      autoComplete="name"
                    className="bg-gray-200 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"/>
                   
                    <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="bg-gray-200 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400"/>
                   
                    <input 
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject"
                    className="bg-gray-200 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"/>

                    <textarea
                      type="text"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                        className="bg-gray-200 shadow-md border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-400 focus:border-gray-400 md:col-span-2"
                        rows="5" 
                        placeholder="message">
                        </textarea>
                </div>
                <button 
                onClick={saveContact}
                className="inline-block w-auto mt-4 px-6 py-2 bg-cyan-500 rounded-md shadow-lg  shadow-cyan-600/40 text-white font-bold  text-sm hover:bg-cyan-500 focus:ring hover-translate-y-0.5 transform transition focus:outline-none">Send Message</button>
            </form>
        </div>
    </div>
</section>
    </>
  )
}
