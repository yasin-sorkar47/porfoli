import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="py-16 bg-gray-50 text-center lg:px-20">
      <div className="container mx-auto flex  flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="flex  justify-center relative z-30">
            <div className="absolute bg-orange-300 w-72 lg:w-80 shadow-2xl rounded-md h-[335px] z-20 bottom-0 ">
              <div className="relative">
                <div className="absolute h-[335px] border-2  rounded-lg  border-orange-600 w-full top-1 left-2 z-[-1]"></div>
              </div>
            </div>
            <img
              src="https://i.ibb.co/vLm1Qzg/banner-avatar.png"
              alt="Banner img"
              className="z-20"
            />
          </div>
        </div>
        <div className="md:w-1/2 lg:text-left px-8 lg:mt-20 text-center">
          <h3 className="text-orange-500 uppercase text-sm font-bold">
            A Bit About Me
          </h3>
          <h2 className="lg:text-4xl text-xl font-semibold my-4">
            Passionate About Code, Driven by Creativity
          </h2>
          <p className="text-gray-600 mb-6">
            Driven by a love for solving problems and creating seamless digital
            experiences, I develop user-centered websites and applications.
          </p>
          <div className="flex space-x-4 justify-center lg:justify-start">
            <a href="#" className="text-orange-500 hover:text-orange-700">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-700">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-700">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-orange-500 hover:text-orange-700">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
