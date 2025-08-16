import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-20">

      {/* About Us Title */}
      <div className="text-center pt-12">
        <p className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-wide">
          ABOUT <span className="text-[#5f6FFF]">US</span>
        </p>
        <div className="w-20 h-1 bg-[#5f6FFF] mx-auto mt-3 rounded-full"></div>
      </div>

      {/* About Content */}
      <div className="my-14 flex flex-col md:flex-row items-center gap-12">
        <img
          className="w-full md:max-w-[360px] rounded-2xl shadow-md"
          src={assets.about_image}
          alt="About Sanjeevani"
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/3 text-[15px] leading-relaxed text-gray-600">
          <p>
            Welcome to <span className="font-semibold text-gray-800">Sanjeevani</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Sanjeevani, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Sanjeevani is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, we are here to support you every step of the way.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Our Vision</h3>
          <p>
            Our vision at Sanjeevani is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Title */}
      <div className="text-center my-12">
        <p className="text-2xl md:text-3xl font-semibold text-gray-800">
          WHY <span className="text-[#5f6FFF]">CHOOSE US</span>
        </p>
        <div className="w-24 h-1 bg-[#5f6FFF] mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Why Choose Us Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="border rounded-2xl p-8 sm:p-10 flex flex-col gap-4 text-[15px] text-gray-600 hover:bg-[#5f6FFF] hover:text-white transition-all duration-500 shadow-md hover:shadow-xl cursor-pointer">
          <b className="text-lg font-semibold uppercase">⚡ Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className="border rounded-2xl p-8 sm:p-10 flex flex-col gap-4 text-[15px] text-gray-600 hover:bg-[#5f6FFF] hover:text-white transition-all duration-500 shadow-md hover:shadow-xl cursor-pointer">
          <b className="text-lg font-semibold uppercase">🎯 Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className="border rounded-2xl p-8 sm:p-10 flex flex-col gap-4 text-[15px] text-gray-600 hover:bg-[#5f6FFF] hover:text-white transition-all duration-500 shadow-md hover:shadow-xl cursor-pointer">
          <b className="text-lg font-semibold uppercase">💙 Personalization</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
