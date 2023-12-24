import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function Home() {
  return (
    <main className="mx-auto">

      {/* NAVBAR */}
      <Navbar />

      <div className="grid-main">

        {/* IMAGE PRINCIPAL */}
        <div className="mx-auto">
          <Image
            className="block justify-center mx-auto"
            src="/bague.png"
            alt="Bague Or Image"
            width={350}
            height={350}
            priority
          />
        </div>

        {/* TITRE PRINCIPAL */}
        <div className="flex justify-center">
          <div className="mx-auto md:pt-20 lg:pt-18 sm:items-center">
            <div>
              <h2 className="title-header pb-4">
                Special Celebration
              </h2>
              <p className='title-header'>with <span className="myFont animate-pulse"> Diamond Heart</span></p>
            </div>
            <div className="grid grid-cols-1 pt-7 pb-14">
              <button type="button" className="button">
                <a href="/new">Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECOND MAIN */}
      <div>
        <div className="col-start-1 col-end-7 block p-16 bg-gray-500 dark:bg-gray-800">
          <div className="grid-second-main">
            <div className="text-white">
              <div className="">
                <a href="/" className="">
                  <Image
                    className="card"
                    src="/bague-1.png"
                    alt="Bague Or Image"
                    width={300}
                    height={300}
                    priority
                  />
                </a>
              </div>
            </div>

            <div className="text-white">
              <div className="">
                <a href="/" className="">
                  <Image
                    className="card"
                    src="/bague-2.png"
                    alt="Bague Or Image"
                    width={300}
                    height={300}
                    priority
                  />
                </a>
              </div>
            </div>

            <div className="text-white">
              <div className="">
                <a href="/" className="">
                  <Image
                    className="card"
                    src="/bague-3.png"
                    alt="Bague Or Image"
                    width={300}
                    height={300}
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main >
  )
}
