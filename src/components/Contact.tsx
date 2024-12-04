import React from 'react'
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneInboundFill } from "react-icons/bs";


const Contact = () => {
  return (
    <div id="contact" className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5x1' data-aos="zoom-in-up">Get in touch </h2>
                <p className='text-white-600 text-[18px] pt-2 ' data-aos="zoom-in-up">
                    Drop me a line, give me a call,or send me a massege by submittind the form.
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in-up"><AiFillMail size={30} />
                <a href="mailto:bakanwal@outlook.com" 
                 className="text-blue-500 hover:underline">bakanwal@outlook.com</a></div>
                 
                 <div className='flex gap-3 items-center'data-aos="zoom-in-up"><BsFillTelephoneInboundFill size={30} /> (021) 128-7845
                </div>

            </div>
            <div className='space-y-8'></div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
              <label htmlFor='name'>Name</label>
              <input type="text" 
              className="h-[40px] bg-transparent border border-accent"
              id="name"/>
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
              <label htmlFor='email'>Email</label>
              <input type="text" 
              className="h-[40px] bg-transparent border border-accent"
              id="email"/>
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
              <label htmlFor='msg'>Message</label>
              <textarea
              className="bg-transparent border border-accent"
              id="msg rows{8}"/>
              <div><button className='bg-accent p-2 px-4'data-aos="zoom-in-up">Send</button></div>

              
            </div>
            
        </div>
      
    </div>
  )
}

export default Contact
