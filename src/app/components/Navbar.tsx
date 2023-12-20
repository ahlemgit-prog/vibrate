"use client";
import React, { useState } from "react"
import Image from 'next/image'


export default function Navbar() {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = (): void => {
        setisClick(!isClick)
    }

    return (
        <nav className="bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <a href="/" className="text-white">
                                <div className="">
                                    <Image
                                        className="relative dark:drop-shadow-[0_0_0.3rem_#020617]"
                                        src="/diamond-logo.svg"
                                        alt="Diamond Heart Logo"
                                        width={75}
                                        height={40}
                                        priority
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <a href="/" className="text-white hover:bg-white hover:text-gray-950 rounded-lg p-3">
                                New
                            </a>

                            <a href="/jewels" className="text-white hover:bg-white hover:text-gray-950 rounded-lg p-3">
                                Jewels
                            </a>

                            <a href="/about" className="text-white hover:bg-white hover:text-gray-950 rounded-lg p-3">
                                About
                            </a>

                            <a href="/contact" className="text-white hover:bg-white hover:text-gray-950 rounded-lg p-3">
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={toggleNavbar}
                        >
                            {isClick ? (
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                                        fill="currentColor"
                                    />
                                </svg>

                            ) : (
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22 18.0048C22 18.5544 21.5544 19 21.0048 19H12.9952C12.4456 19 12 18.5544 12 18.0048C12 17.4552 12.4456 17.0096 12.9952 17.0096H21.0048C21.5544 17.0096 22 17.4552 22 18.0048Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M22 12.0002C22 12.5499 21.5544 12.9954 21.0048 12.9954H2.99519C2.44556 12.9954 2 12.5499 2 12.0002C2 11.4506 2.44556 11.0051 2.99519 11.0051H21.0048C21.5544 11.0051 22 11.4506 22 12.0002Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M21.0048 6.99039C21.5544 6.99039 22 6.54482 22 5.99519C22 5.44556 21.5544 5 21.0048 5H8.99519C8.44556 5 8 5.44556 8 5.99519C8 6.54482 8.44556 6.99039 8.99519 6.99039H21.0048Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            )}

                        </button>
                    </div>
                </div>
            </div>
            {isClick && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/" className="text-white block hover:bg-white hover:text-gray-950 rounded-lg pl-5 p-2">
                            New
                        </a>

                        <a href="/jewels" className="text-white block hover:bg-white hover:text-gray-950 rounded-lg pl-5 p-2">
                            Jewels
                        </a>

                        <a href="/about" className="text-white block hover:bg-white hover:text-gray-950 rounded-lg pl-5 p-2">
                            About
                        </a>

                        <a href="/contact" className="text-white block hover:bg-white hover:text-gray-950 rounded-lg pl-5 p-2">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
};
