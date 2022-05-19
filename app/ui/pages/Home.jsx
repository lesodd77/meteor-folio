import React, { useState, useEffect } from 'react'
import { Meteor } from 'meteor/meteor';
import { ErrorAlert } from '../contacts/ErrorAlert';
import { SuccessAlert } from '../contacts/SuccessAlert';

import AOS  from 'aos'
import 'aos/dist/aos.css'

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
  },
  {
    title: 'Writing effective landing page copy',
    href: '#',
    description:
      'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
    date: 'Jan 29, 2020',
    datetime: '2020-01-29',
  },
]

export const Home = () => {
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
    Meteor.call('contacts.insert', { name,  email,subject, message }, (errorResponse) => {
    if(errorResponse) {
      showError({message: errorResponse.error });
    } else {
      setName('');
      setSubject('');
      setEmail('');
      setMessage('');
      showSuccess({ message: 'Information saved'})
    }
    });

  }
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    }, []);
  
   }) 
  return (
    <div id="/" className="antialised relative text-gray-600">
    <div className="absolute w-full min-h-screen">
        <div className="absolute z-0 top-0 w-full h-1/2 bg-transparent bg-bottom pt-20 px-12"
            src="">
        </div>
    </div>
    <div className="absolute top-0 -left-4 w-72  h-72 bg-cyan-500 rounded-full mix-blend-multiply filter opacity-10 animate-blob"></div>
    <div className="absolute top-0 -left-16 w-72  h-72 bg-pink-500 rounded-full mix-blend-multiply filter opacity-10 animate-blob"></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute top-0 -right-16 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
    <div className="absolute -bottom-8 right-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
    <div className="m-8 relative space-y-4">
    <div className="relative z-10 flex min-h-screen h-auto justify-center bg-transparent items-center">
        <div className="relative max-w-4xl">
            <div className="relative z-20 bg-transparent md:flex justify-between p-12 shadow-xl rounded-lg w-full max-w-4xl">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter opacity-10 animate-blob animation-delay-2000"></div>
            <div className="sm:flex flex-col justify-between space-y-6 py-6 md:pr-10" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                    <div className="">
                        <h2 className="text-lg">Hello I Am</h2>
                        <h1 className="pt-1 text-5xl font-bold text-gray-800">Simon Agbey</h1>
                    </div>
                    <p className="text-xl leading-relaxed">FullStack developer, specialist in Web App. I have been doing this since 2020. Available to be hired.</p>
                </div>
                
                <img src="./img/simon-bg.png"
                    className="w-80 rounded-full flex-shrink-0 border-6 border-white shadow-md" data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" alt=""/>
            </div>
        </div>
    </div>
    
    <div id="about" className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
    </div>
    <div  className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mt-32 ">
    <h2 className="text-4xl font-bold text-center">
    Skills
   </h2>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl" data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
            These are some of the skills am good using.
          </h2>
          <p className="mt-3 max-w-3xl text-lg text-gray-500" data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          I have skills in Html, Css/scss, JavaScript, Meteorjs, Nodejs, MongoDB, React, Chakra-ui, Tailwindcss, Bootstrap and basic knowledge in Blaze and Firebase.
          </p>
          <div className="mt-8 sm:flex" data-aos="zoom-in-right">
            <div className="rounded-md shadow">
              <a
                href="contact"
                className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 inline-block w-auto mt-4 px-6 py-2 bg-cyan-500 transform motion-safe:hover:scale-110 text-white font-semibold text-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-opacity-80 rounded-md shadow-lg  shadow-cyan-500/40 text-sm" 
              >
                Hire me
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="projects"
                className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 inline-block w-auto mt-4 px-6 py-2 bg-cyan-500 transform motion-safe:hover:scale-110 text-white font-semibold text-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-opacity-80 rounded-md shadow-lg  shadow-cyan-500/40 text-sm"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2" data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12  rounded-full transform motion-safe:hover:scale-110"
              src="./img/html.png"
              alt="Html"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12 rounded-full shadow-lg border-r transform motion-safe:hover:scale-110" src="./img/css.png" alt="Css-tailwindcss-chakra-ui-boostrap-scss" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12 rounded-full transform motion-safe:hover:scale-110 shadow-lg border-r" src="./img/javascript.png" alt="JavaScript" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12 rounded-full transform motion-safe:hover:scale-110 shadow-lg border-r"
              src="./img/node.png"
              alt="Nodejs"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12 rounded-full transform motion-safe:hover:scale-110 shadow-lg border-r"
              src="./img/meteor.png"
              alt="Meteorjs"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12 rounder.fulltransform motion-safe:hover:scale-110 shadow-md border-r"
              src="./img/firebase.png"
              alt="Statamic"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
    </div>
    <section id="projects" className="py-20 px-8">
        <div className="max-w-6xl mx-auto mt-32 ">
        <h2 className="text-4xl font-bold text-center">
        Projects
        </h2>
            <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            <div className="bg-white rounded-md shadow-md">
            <img className="object-cover w-full h-80 rounded-t-md motion-safe:hover:scale-110" data-aos="fade-right"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Paperless_work_desk_with_an_iPad%2C_iMac_and_a_MacBook.jpg"
                alt=""/>
            <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800">Todo App</h3>
                <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis obcaecati
                    repellendus labore voluptates possimus, eaque magnam?</p>
                <a href="projects"
                className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 inline-block w-auto mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-opacity-80 rounded-md shadow-lg  shadow-cyan-500/40 text-sm">View
                    More</a>
            </div>
        </div>
        <div className="bg-white rounded-md shadow-md"  data-aos="fade-up">
        <img className="object-cover w-full h-80 rounded-t-md motion-safe:hover:scale-110"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Paperless_work_desk_with_an_iPad%2C_iMac_and_a_MacBook.jpg"
            alt=""/>
        <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800">Todo App</h3>
            <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis obcaecati
                officia earum eum quaerat repellendus labore voluptates possimus, eaque magnam?</p>
            <a href="projects"
            className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 inline-block w-auto mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-opacity-80 rounded-md shadow-lg  shadow-cyan-500/40 text-sm">View
                More</a>
        </div>
    </div>
                <div className="bg-white rounded-md shadow-md">
                    <img className="object-cover w-full h-80 rounded-t-md motion-safe:hover:scale-110" data-aos="fade-left"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Paperless_work_desk_with_an_iPad%2C_iMac_and_a_MacBook.jpg"
                        alt=""/>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800">Todo App</h3>
                        <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis obcaecati
                            officia earum eum quaerat repellendus labore voluptates possimus, eaque magnam?</p>
                        <a href="projects"
                        className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 inline-block w-auto mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-opacity-80 rounded-md shadow-lg  shadow-cyan-500/40 text-sm">View
                            More</a>
                    </div>
                </div>
                <div className="bg-white rounded-md shadow-md" data-aos="fade-right">
                    <img className="object-cover w-full h-80 rounded-t-md motion-safe:hover:scale-110" 
                        src="https://api.time.com/wp-content/uploads/2021/02/laptop-home-office.jpg" alt=""/>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800">Membership</h3>
                        <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis obcaecati
                            officia earum eum quaerat repellendus labore voluptates possimus, eaque magnam?</p>
                        <a href="projects"
                        className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 inline-block w-auto mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-opacity-80 rounded-md shadow-lg  shadow-cyan-500/40 text-sm">View
                            More</a>
                    </div>
                </div>
                <div className="bg-white rounded-md shadow-md lg:col-span-2" data-aos="fade-left">
                    <img className="object-cover w-full h-80 rounded-t-md motion-safe:hover:scale-110" 
                        src="https://hbr.org/resources/images/article_assets/2014/10/Mar20_05_1187745190.jpg" alt=""/>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800">Better Home</h3>
                        <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis obcaecati
                            officia earum eum quaerat repellendus labore voluptates possimus, eaque magnam?</p>
                        <a href="projects"
                            className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 inline-block w-auto mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-center focus:outline-none focus:ring focus:ring-offset-2 focus:ring-cyan-500 focus:ring-opacity-80 rounded-md shadow-lg  shadow-cyan-500/40 text-sm">View
                            More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
   
    <section id="testimonials">
     
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center shadow-lg">
       
        <h2 className="text-4xl font-bold text-center">
         Testimonials
        </h2>
      
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
         
          <div
            className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3" data-aos="fade-right"
          >
            <img src="img/avatar-anisha.png" className="w-16 -mt-14 motion-safe:hover:scale-110" alt="" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

       
          <div
            className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3" data-aos="fade-down"
          >
            <img src="img/avatar-ali.png" className="w-16 -mt-14 motion-safe:hover:scale-110" alt="" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          
          <div
            className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3" data-aos="fade-left"
          >
            <img src="img/avatar-richard.png" className="w-16 -mt-14 motion-safe:hover:scale-110" alt="" />
            <h5 className="text-lg font-bold">Caleb Satsi</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
     
        <div className="my-16">
          <a
            href="#"
            className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a>
        </div>
      </div>
    </section>
 <section id="blog" >
 <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
        <h2 className="text-4xl font-bold text-center" data-aos="fade-left">
        News Conner
       </h2>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center" data-aos="fade-right">
         
          </div>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12" data-aos="fade-right">
          {posts.map((post) => (
            <div key={post.title}>
              <p className="text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.description}</p>
              </a>
              <div className="mt-3" data-aos="fade-left">
                <a href={post.href} className="text-base font-semibold text-cyan-600 hover:text-cyan-500">
                  Read full story
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
 </section>
 <section id="contact" className="pt-20 pb-36 px-8 bg-gray-50 rounded">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-4xl font-bold text-center" data-aos="fade-left">
 Contact Us
</h2>

 <div className="relative py-10">
 
 <div className="absolute inset-0 flex items-center" aria-hidden="true">
   <div className="w-full border-t border-gray-100" data-aos="fade-up"/>
 </div>
</div>
 </div>
 <div className="mt-16 relative max-w-4xl mx-auto">
     
     <div className="relative z-20 bg-gray-50 rounded p-12">
         <form action="" data-aos="fade-down">
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
    </div>
    </div>
  
  )
};
