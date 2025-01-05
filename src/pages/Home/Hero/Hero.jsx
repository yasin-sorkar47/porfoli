import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch("/my-rsume.pdf");
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Your-CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading the CV:", error);
    }
  };

  return (
    <div id="home" className="bg-slate-800">
      <div className="grid grid-cols-1 lg:grid-cols-2  px-6 sm:px-10 lg:px-20 pt-16 lg:pt-32 items-center container mx-auto">
        {/* Left Section */}
        <div className="text-white space-y-5 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="font-semibold text-2xl sm:text-4xl lg:text-5xl">
            Turning ideas into <br />
            interactive realities <br />
            through <span className="text-orange-500">Web design</span>
          </h1>
          <p>
            I am Yaisin, a Web Developer. Lorem ipsum dolor sit amet
            consectetur.
            <br /> Lorem ipsum dolor sit.
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start ">
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/yasin-sarkar-24444b298/"}
              className="text-orange-500 hover:text-orange-700"
            >
              <FaLinkedinIn size={24} />
            </Link>
            <Link
              target="_blank"
              to={"https://github.com/yasin-sorkar47"}
              className="text-orange-500 hover:text-orange-700"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              target="_blank"
              to={"https://x.com/yasinsorkar47"}
              className="text-orange-500 hover:text-orange-700"
            >
              <FaTwitter size={24} />
            </Link>
            <Link
              target="_blank"
              to={"https://www.facebook.com/@yasinSarkar47"}
              className="text-orange-500 hover:text-orange-700"
            >
              <FaFacebook size={24} />
            </Link>
          </div>

          <ul className="flex justify-center lg:justify-start ">
            <li className="bg-orange-500 text-white hover:bg-orange-600 transition mr-4 py-2 px-4 rounded-3xl">
              <button onClick={handleDownload}>Get Resume</button>
            </li>
            <li className="bg-orange-500 text-white hover:bg-orange-600 transition py-2 px-4 rounded-3xl">
              <button>Watch Video</button>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex justify-center relative z-30 mt-8 lg:mt-0">
          <div className="absolute bg-slate-400 w-64 sm:w-80 lg:w-96 h-[270px] sm:h-[300px] lg:h-[335px] z-10 bottom-0 rounded-t-lg overflow-hidden">
            <div className="relative">
              <div className="absolute w-full h-8 bg-gray-500 top-0 left-0">
                <ul className="flex">
                  <li className="w-3 h-3 bg-white ml-2 mt-3 rounded-full"></li>
                  <li className="w-3 h-3 bg-white ml-2 mt-3 rounded-full"></li>
                  <li className="w-3 h-3 bg-white ml-2 mt-3 rounded-full"></li>
                </ul>
              </div>
            </div>
          </div>

          <img
            src="https://i.ibb.co/vLm1Qzg/banner-avatar.png"
            alt="Banner img"
            className="z-20 w-40 sm:w-52 lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
