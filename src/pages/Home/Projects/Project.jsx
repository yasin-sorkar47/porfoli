import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section id="project" className="py-12 bg-gray-50 container mx-auto">
      <div className="flex flex-col items-center">
        <ul className="flex items-center mb-4">
          <li className="bg-orange-500  w-3 h-3 rounded-full mr-3"></li>
          <li className="text-orange-500 uppercase text-sm font-bold ">
            Projects
          </li>
        </ul>
        <h2 className="text-center text-3xl font-semibold mb-8">My Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* cart 1  */}
        <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow">
          <img
            src="https://i.ibb.co.com/4JsJf4Y/screencapture-movfix-99724-web-app-2025-01-05-15-35-16.png"
            alt="movie"
            className="w-full h-[300px] object-cover mb-4"
          />
          <h3 className="text-lg font-medium mb-2">MoveFix</h3>
          <h4 className="text-sm text-gray-500 mb-1">
            A movie browsing app built using React and APIs.
          </h4>
          <Link
            to={"/details/01"}
            className="border py-1 px-2 border-orange-500 rounded-sm"
          >
            View Details
          </Link>
        </div>
        {/* cart 2  */}
        <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow">
          <img
            src="https://i.ibb.co.com/ssp53vs/screencapture-adventurea-6c894-web-app-2025-01-05-15-41-46.png"
            alt="movie"
            className="w-full h-[300px] object-cover mb-4"
          />
          <h3 className="text-lg font-medium mb-2">Adventurea</h3>
          <h4 className="text-sm text-gray-500 mb-1">
            An eco-tourism website with booking features built in React.
          </h4>
          <Link
            to={"/details/02"}
            className="border py-1 px-2 border-orange-500 rounded-sm"
          >
            View Details
          </Link>
        </div>
        {/* cart 3  */}
        <div className="border border-gray-300 p-4 rounded-lg hover:shadow-lg transition-shadow">
          <img
            src="https://i.ibb.co.com/XYLwmQ8/screencapture-online-education-326ed-web-app-2025-01-05-15-47-48.png"
            alt="movie"
            className="w-full h-[300px] object-cover mb-4"
          />
          <h3 className="text-lg font-medium mb-2">LearnSkills</h3>
          <h4 className="text-sm text-gray-500 mb-1">
            Empowering learners with courses, resources, and career advancement.
          </h4>
          <Link
            to={"/details/03"}
            className="border py-1 px-2 border-orange-500 rounded-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
}
