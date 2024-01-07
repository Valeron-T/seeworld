import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button';
import emailjs, { init } from "@emailjs/browser";

function ContactUs() {
    const [status, setStatus] = useState("Submit");

    init("H3xGqvgyO53qeHARU");
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        emailjs.sendForm("service_arx6y58", "template_vu07j4g", form.current, "H3xGqvgyO53qeHARU").then(
            (result) => {
                alert("Message Sent Successfully.");
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        setStatus("Submit");
    };

    return (
        <div className='min-h-[100vh] bg-gray-700'>
            <div className={`sm:px-16 px-6 flex flex-col justify-center items-center z-30 w-full`}>
                <div className={`xl:max-w-[1280px] w-full`}>
                    <Navbar />
                </div>
                <div className="flex flex-col min-w-[60%]">
                    <h1 className='font-blacksword xl:p-16 xl:text-8xl sm:text-4xl text-2xl text-white p-4 text-center'>Contact Us</h1>
                    <form className="flex flex-col w-full p-4 font-poppins" onSubmit={handleSubmit} ref={form}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="text-white font-worksans font-extralight block uppercase tracking-wide text-xs mb-2" for="name">
                                    Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" name="name" placeholder="John Doe" required />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="text-white font-worksans font-extralight block uppercase tracking-wide text-xs mb-2" for="email">
                                    Email (Optional)
                                </label>
                                <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" name="email" placeholder="abc@gmail.com" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="text-white font-worksans font-extralight block uppercase tracking-wide text-xs mb-2" for="mobile">
                                    Mobile 
                                </label>
                                <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="mobile" name="mobile" type="tel" minLength={10} maxLength={10} placeholder="7986548957" required />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="text-white font-worksans font-extralight block uppercase tracking-wide text-xs mb-2" for="category">
                                    Category
                                </label>
                                <div className="relative">
                                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="category" name='category'>
                                        <option id='Tour Packages'>Tour Packages</option>
                                        <option id='Passport & Visa'>Passport & Visa</option>
                                        <option id='Corporate M.I.C.E'>Corporate M.I.C.E</option>
                                        <option id='Cruises'>Cruises</option>
                                        <option id='Attestation'>Attestation</option>
                                        <option id='Air Tickets'>Air Tickets</option>
                                        <option id='Vehicle Hire'>Vehicle Hire</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="text-white font-worksans font-extralight block uppercase tracking-wide text-xs mb-2" for="message">
                                    Message (Optional)
                                </label>
                                <input className="appearance-none block w-full bg-gray-200  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" name='message' type="text" placeholder="Message" />
                                {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
                            </div>
                        </div>
                        <div className={"flex w-min justify-center self-center mb-4 p-4 rounded-xl bg-gradient-to-br from-[#60009A] to-[#73226B] h-min ss:ml-4 shadow-2xl shadow-black"}>
                            <button type='submit'>
                                <p className='uppercase text-white'>{status}</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContactUs