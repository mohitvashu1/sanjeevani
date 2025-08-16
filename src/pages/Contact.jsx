import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="px-6 sm:px-12 lg:px-20">
      {/* Title */}
      <div className="text-center pt-12">
        <p className="text-3xl md:text-4xl font-semibold text-gray-800 uppercase tracking-wide">
          Contact <span className="text-[#5f6FFF]">Us</span>
        </p>
        <div className="w-20 h-1 bg-[#5f6FFF] mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Contact Content */}
      <div className="my-14 flex flex-col md:flex-row items-center gap-12 mb-28">
        <img
          className="w-full md:max-w-[360px] rounded-2xl shadow-md"
          src={assets.contact_image}
          alt="Contact Sanjeevani"
        />

        <div className="flex flex-col justify-center items-start gap-6 bg-white shadow-lg rounded-2xl p-8 md:p-10 border border-gray-100">
          <div>
            <p className="font-semibold text-lg text-gray-800 uppercase">
              Our Office
            </p>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Sohani Patti <br /> Buxar, Bihar, INDIA
            </p>
          </div>

          <div>
            <p className="text-gray-600 leading-relaxed">
              Tel: <span className="font-medium">+91 748****56</span> <br />
              Email:{" "}
              <a
                href="mailto:mohitchoubey03@gmail.com"
                className="text-[#5f6FFF] hover:underline"
              >
                mohitchoubey03@gmail.com
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold text-lg text-gray-800 uppercase">
              Careers at Sanjeevani
            </p>
            <p className="text-gray-600 mt-2">
              Learn more about our teams and job openings.
            </p>
          </div>

          <button className="mt-2 border-2 border-[#5f6FFF] text-[#5f6FFF] px-8 py-3 text-sm rounded-full font-medium hover:bg-[#5f6FFF] hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
