"use client";
import React, { useState } from "react"
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
    return (
        <main className="">
            <Navbar />

            <div className="grid-main mx-4">

                {/* IMAGE PRINCIPAL */}
                <div className="">
                    <Image
                        className="block justify-center mx-auto py-20"
                        src="/draw.png"
                        alt="Draw Image"
                        width={500}
                        height={500}
                        priority
                    />
                </div>

                {/* TITRE PRINCIPAL */}
                <div className="flex justify-center">
                    <div className="mx-auto md:pt-20 lg:pt-18 sm:items-center">
                        <div>
                            <h2 className="title-header pb-4 text-3xl">
                                Who Are We
                            </h2>
                            <p className='title-header text-3xl'><span className="myFont animate-pulse"> Diamond Heart</span></p>
                        </div>
                        <div className="grid grid-cols-1 pt-7 pb-14">
                            {/* SECTION FORM */}
                            <section className="container">
                                <div className="grid-about pb-9">
                                    <p className="text-gray-900 dark:text-gray-200 leading-9 text-lg">
                                        At Diamond Heart, we have a workshop in Belgium where 20 qualified craftsmen work.
                                        Using both traditional tools and cutting-edge tools,
                                        the latter carry out repair,
                                        transformation,
                                        enhancement,
                                        customization operations and
                                        can even create the jewelry of your dreams.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>


            </div>
            <Footer />
        </main>
    )
}