import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div className="bg-slate-800 text-white lg:py-16 py-8  px-3 lg:px-0">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ul className="flex items-center">
            <li className="bg-orange-500 w-3 h-3 rounded-full mr-3"></li>
            <li className="text-orange-500 uppercase text-sm font-bold">
              Contact Me
            </li>
          </ul>
          <h2 className="text-3xl font-semibold">
            Have a project?
            <br />
            Let's discuss now!
          </h2>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-orange-500 w-6 h-6" />
            <span>+880 1234 5687</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-orange-500 w-6 h-6" />
            <span>yourmail@gmail.com</span>
          </div>
        </div>

        <form className="bg-gray-900 p-8 rounded-lg space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Write your project details"
            rows="5"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition-all"
          >
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
}
