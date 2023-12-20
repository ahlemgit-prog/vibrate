"use client";
import React, { useState } from "react"
import Image from 'next/image'
// import FontAwesome from '../components/FontAwesome'
import Head from 'next/head'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {} from "@fortawesome/free-solid-svg-icons";


export default function Footer() {
    return (
        <main className="mx-auto bg-gray-950">
            <div className="grid-footer lg:p-24 md:p-20 p-16">

                {/* FIRST SECTION */}
                <div className="grid-element">
                    <h3 className="title-footer">D.H</h3>
                    <nav className="flex flex-col bg-gray-950 text-white border-gray-200 ">
                        <a href="/" className="link-footer">
                            Legal Notice
                        </a>

                        <a href="/" className="link-footer">
                            Privacy Policy
                        </a>
                    </nav>
                </div>

                {/* SECOND SECTION */}
                <div className="grid-element">
                    <h3 className="title-footer">SHOP</h3>
                    <nav className="flex flex-col bg-gray-950 text-white border-gray-200">
                        <a href="/" className="link-footer">
                            New
                        </a>

                        <a href="/jewels" className="link-footer">
                            Jewels
                        </a>
                        <a href="/about" className="link-footer">
                            About
                        </a>
                        <a href="/contact" className="link-footer">
                            Contact

                        </a>
                    </nav>
                </div>

                {/* THIRD SECTION */}
                <div className="grid-element">
                    <h3 className="title-footer">CONTACT</h3>
                    <div className="flex flex-col bg-gray-950 text-white border-gray-200">

                        <div className="text-gray-300 hover:text-gray-200 link-element flex">
                            <span className="">
                                <i className="gg-phone animate-wiggle"></i>
                            </span>
                            <span className="shrink-0 h-9 w-32">
                                <a href="tel:+324 00 00 00 00" className="flex flex-row-reverse link-element"> +32 4 00 00 00 00</a>
                            </span>
                        </div>

                        <div className="text-gray-300 hover:text-gray-200 link-element flex">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </span>
                            <span className="ml-3 mt-1">
                                <a href="mail:DiamondHeart@gmail.com" className="flex flex-row-reverse link-element"> D.H@gmail.com</a>
                            </span>
                        </div>

                        <div className="text-gray-300 hover:text-gray-200 link-element flex">
                            <span className="mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                            </span>
                            <span className="ml-3 mt-1">
                                <p className="flex flex-row-reverse link-element mt-4">Rue Blanche 111, 4000 L.G | Belgium</p>

                            </span>
                        </div>

                    </div>
                </div>

                {/* FOURTH SECTION */}
                <div className="grid-element">
                    <h3 className="title-footer">FOLLOW US</h3>
                    <div className="grid grid-cols-2 gap-1">
                        <div className="text-white">
                            <a href="/" className="link-footer">
                                <i className="gg-facebook hover:text-gray-400"></i>
                            </a>
                        </div>

                        <div className="text-white">
                            <a href="/" className="link-footer">
                                <i className="gg-instagram hover:text-gray-400"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="col-start-1 col-end-7">
                <p className="text-center text-xs py-8 text-gray-200">&copy; 2023 Diamond Heart</p>
            </div>
        </main>


    )
}