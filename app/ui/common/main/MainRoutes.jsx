import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import { NotFound } from  '../../pages/NotFound';
import { Home } from '../../pages/Home';
import { About  } from '../../pages/About';
import { Projects  } from '../../pages/Projects';
import { Blog } from '../../pages/Blog';
import { Contact } from '../../contacts/Contact';
import {  SignUp } from '../auth/SignUp';
import { Testimonials } from '../../pages/Testimonials';

import { ContactList } from '../../contacts/ContactList';


export const MainRoutes = () => {
  return (
    
     <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactList" element={<ContactList/>} />
        <Route path="testimonials" element={<Testimonials/>} />
        <Route path="signup" element={<SignUp />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
     
  )
}
