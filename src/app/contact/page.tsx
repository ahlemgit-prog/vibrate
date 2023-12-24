"use client";
import React, { useState } from "react"
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Contact() {
    return (
        <main>
            <Navbar />
            <div className="grid-contact">
                <div className="container">

                    {/* TITRE PRINCIPAL */}
                    <div className="flex justify-center">
                        <div className="mx-auto lg:my-12 sm:items-center">
                            <div className="my-7">
                                <h2 className="title-header pb-4 text-3xl">
                                    Get In Touch
                                </h2>
                                <p className='title-header text-3xl'>with <span className="myFont animate-pulse"> Diamond Heart</span></p>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <form className="container">
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="first_name" className="form-label">First name</label>
                                <input type="text" id="first_name" className="form-input" placeholder="John" required />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="form-label">Last name</label>
                                <input type="text" id="last_name" className="form-input" placeholder="Doe" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="form-label">Phone number</label>
                                <input type="tel" id="phone" className="form-input" placeholder="+32" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" className="form-input" placeholder="@gmail.com" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                            <textarea id="message" className="form-input" placeholder="Hello," required ></textarea>
                        </div>

                        <button type="submit" className="button grid grid-cols-1 pt-7 pb-14">Submit</button>
                    </form>
                </div>

                <div className="div">

                    {/* IMAGE PRINCIPAL */}
                    <div className="">
                        <Image
                            className="block justify-center mx-auto py-20"
                            src="/contact.png"
                            alt="Contact Image"
                            width={350}
                            height={350}
                            priority
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </main>

    );
}
