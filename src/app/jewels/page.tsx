import Image from 'next/image'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

export default function Jewels() {
    return (
        <main className="mx-auto">

            {/* NAVBAR */}
            <Navbar />

            {/* TITRE PRINCIPAL */}
            <div className="grid-title">
                <div className="flex justify-center">
                    <div className="mx-auto sm: pt-20 md:pt-20 lg:pt-18 sm:items-center">
                        <div>
                            {/* <h2 className="flex flex-col justify-center text-center p-9 text-9xl">Jewels</h2> */}
                            <h2 className="title-article pb-4 text-3xl">
                                Vibrate with
                            </h2>
                            <p className='title-header text-3xl'><span className="myFont animate-pulse"> Diamond Heart</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ARTICLE MAIN */}
            <div>
                <div className="col-start-1 col-end-7 block p-16">
                    <div className="grid-article">
                        <div className="text-white">
                            <div className="">
                                <a href="/article" className="">
                                    <Image
                                        className="card"
                                        src="/6.png"
                                        alt="6"
                                        width={300}
                                        height={300}
                                        priority
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="text-white">
                            <div className="">
                                <Image
                                    className="card"
                                    src="/7.png"
                                    alt="7"
                                    width={300}
                                    height={300}
                                    priority
                                />
                            </div>
                        </div>

                        <div className="text-white">
                            <div className="">
                                <Image
                                    className="card"
                                    src="/8.png"
                                    alt="8"
                                    width={300}
                                    height={300}
                                    priority
                                />
                            </div>
                        </div>

                        <div className="text-white">
                            <div className="">
                                <Image
                                    className="card"
                                    src="/9.png"
                                    alt="9"
                                    width={300}
                                    height={300}
                                    priority
                                />
                            </div>
                        </div>

                        <div className="text-white">
                            <div className="">
                                <Image
                                    className="card"
                                    src="/10.png"
                                    alt="10"
                                    width={300}
                                    height={300}
                                    priority
                                />
                            </div>
                        </div>

                        <div className="text-white">
                            <div className="">
                                <Image
                                    className="card"
                                    src="/11.png"
                                    alt="11"
                                    width={300}
                                    height={300}
                                    priority
                                />
                            </div>
                        </div>

                        <div className="text-white">
                            <div className="">
                                <Image
                                    className="card"
                                    src="/12.png"
                                    alt="12"
                                    width={300}
                                    height={300}
                                    priority
                                />
                            </div>
                        </div>

                        <div className="text-white">
                            <div className="">
                                <Image
                                    className="card"
                                    src="/13.png"
                                    alt="13"
                                    width={300}
                                    height={300}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main >
    )
}
