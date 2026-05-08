

function Hero(){
    return (
        <section id="home" className="w-full">
            <div className="container-custom  grid grid-cols-1 lg:grid-cols-10">

                {/* left side  */}
                <div className=" md:mt-10  lg:col-span-6 ">
                    <h1 className="text-5xl sm:text-7xl">Develop your <br /> 
                        skills in a new <br />
                        and unique way
                    </h1>
                    <p className="text-text-light mt-6 leading-10 text-sm sm:text-base">
                        Develop your skills in a fresh, unique way by exploring hands-on experiences, <br />
                        creative problem-solving, and real-world applications. Embrace new <br />
                        techniques to unlock hidden talents and expand your expertise.
                    </p>

                    <div className="mt-6 flex gap-3">
                        <button className="primary-btn">
                            Enrol now!
                        </button>
                        <button className="secondary-btn">
                            Watch video
                        </button>
                    </div>
                </div>

                {/* right side  */}
                <div className=" md:mt-30 lg:col-span-4">
                    <img className="scale-100 lg:scale-150" src="src/assets/hero.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero;