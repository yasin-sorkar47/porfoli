import image from "../../../assets/image.png";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 bg-gray-50 text-center lg:px-20">
      <div className="container mx-auto flex  flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 mt-12 md:mt-0">
          <div className="flex  justify-center relative z-30">
            <div className="absolute bg-orange-300 w-72 lg:w-80 shadow-2xl rounded-md h-[335px] z-20 bottom-0 ">
              <div className="relative">
                <div className="absolute h-[335px] border-2  rounded-lg  border-orange-600 w-full top-1 left-2 z-[-1]"></div>
              </div>
            </div>
            <img src={image} alt="Banner img" className="z-20" />
          </div>
        </div>
        <div className="md:w-1/2 lg:text-left px-8 lg:mt-20 text-center">
          <h3 className="text-orange-500 uppercase text-2xl mb-5 font-bold">
            A Bit About Me
          </h3>
          <div>
            <p className="text-lg leading-relaxed mb-6">
              Hello! I'm{" "}
              <span className="font-bold text-orange-500">Yasin Sarkar</span>, a{" "}
              <span className="font-semibold text-lime-600">
                Frontend Developer
              </span>{" "}
              who loves crafting stunning, user-friendly web experiences. My
              journey into coding began with curiosity, exploring how the
              internet works, and has grown into a deep passion for web
              development.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I specialize in{" "}
              <span className="font-semibold text-orange-500">React.js</span>{" "}
              and{" "}
              <span className="font-semibold text-orange-500">
                Tailwind CSS
              </span>
              . I thrive on solving challenging problems and turning ideas into
              reality. Building responsive, modern web applications is not just
              my skill but my passion.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me{" "}
              <span className="font-semibold text-orange-500">
                playing football
              </span>
              , <span className="font-semibold text-orange-500">painting</span>,
              or spending quality time with loved ones. These activities inspire
              my creativity and keep me motivated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
