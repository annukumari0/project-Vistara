import React from 'react'
import background from "../assets/backgroud.png"

const Home = () => {
    return (
        <section className="py-16 bg-gray-50 text-center px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
                {/* Left: Mission Text */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
                    <p className="text-base sm:text-lg text-gray-600">
                        A decade of excellence and beyond, <span className="font-semibold text-blue-600">NETAX Networks</span> is a leading distribution firm
                        driving enterprise advancement. We empower our channel partners with opportunities through aggressive market
                        development and continuous improvement fueled by agility.
                    </p>
                </div>

                {/* Right: Image */}
                <div className="md:w-1/2 p-6">
                    <img
                        src={background}
                        alt="NETAX Networks Mission"
                        className="w-full h-auto p-4 rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Achievements */}
            <div className="mt-16 max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Our Achievements</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-8">
                    With a strong national presence, we provide seamless business experiences for our <span className="font-semibold text-blue-600">300+ partners</span>.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">1200+</h3>
                        <p className="mt-2 text-sm sm:text-base">Satisfied Customers</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">850+</h3>
                        <p className="mt-2 text-sm sm:text-base">Released Projects</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">10,000+</h3>
                        <p className="mt-2 text-sm sm:text-base">Hours of Support</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">100%</h3>
                        <p className="mt-2 text-sm sm:text-base">Hard Work & Dedication</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home