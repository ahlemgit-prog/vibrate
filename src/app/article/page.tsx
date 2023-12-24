"use client";
import React, { useState } from "react"
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Article() {
    return (
        <main>
            <Navbar />
            <div className="grid-main mx-4">

                {/* IMAGE PRINCIPAL */}
                <div className="">
                    <Image
                        className="block justify-center mx-auto py-20 scale-75 hover:scale-95 ease-in duration-500"
                        src="/6.png"
                        alt="Draw Image"
                        width={670}
                        height={670}
                        priority
                    />
                </div>

                {/* TITRE PRINCIPAL */}
                <div className="flex justify-center">
                    <div className="mx-auto md:pt-20 lg:pt-18 sm:items-center">
                        <div>
                            <h2 className="title-header pb-4 text-3xl">
                                Brillant Gold
                            </h2>
                            <p className='title-header text-3xl'><span className="myFont animate-pulse"> Diamond Heart</span></p>
                        </div>
                        <div className="grid grid-cols-1 pt-7 pb-14">
                            {/* SECTION FORM */}
                            <section className="container">
                                <div className="grid-about">
                                    <div className="grid grid-cols-3 gap-4">

                                        <div className="col-span-2">
                                            <p className="text-article-left">
                                                Weight (gr)
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="text-article-right">
                                                0.905
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <p className="text-article-left">
                                                Main material
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="text-article-right">
                                                Gold
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <p className="text-article-left">
                                                Color
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="text-article-right">
                                                Rose & White
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <p className="text-article-left">
                                                Diamond's color
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="text-article-right">
                                                White
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <p className="text-article-left">
                                                Number of stones
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="text-article-right">
                                                7
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <p className="text-article-left">
                                                Shape
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="text-article-right">
                                                Round
                                            </p>
                                        </div>

                                        <div className="col-span-2">
                                            <p className="text-article-left">
                                                Carat
                                            </p>
                                        </div>
                                        <div className="">
                                            <p className="text-article-right">
                                                0.0350
                                            </p>
                                        </div>
                                        <hr />


                                    </div>
                                    {/* PRIZE */}

                                    <div className="">
                                        <p className="text-neutral-950 dark:text-gray-100 leading-9 text-2xl py-1">
                                            257 $
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 pt-7 pb-14">
                                        <button type="button" className="button">
                                            <a href="/contact">Make An Appointment</a>
                                        </button>
                                    </div>

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
