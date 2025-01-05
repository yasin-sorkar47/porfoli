import { Link } from "react-router-dom";

const EcoDetails = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-20">
      <h2 className="text-4xl font-bold text-lime-500 text-center mb-8 mt-20">
        Adventurea - Details
      </h2>

      <div className="bg-white shadow-lg p-8 rounded-lg">
        <h3 className="text-xl font-semibold text-lime-500 mb-4">
          Description
        </h3>
        <p className="text-gray-500 mb-4">
          Adventurea is a tourism website for eco-tourism bookings and adventure
          tour services in Bangladesh. Built using React.
        </p>

        <h3 className="text-xl font-semibold text-lime-500 mb-4">
          Technologies Used
        </h3>
        <ul className="list-disc pl-5 text-gray-500 mb-4">
          <li>React</li>
          <li>Firebase</li>
          <li>Tailwind CSS</li>
        </ul>

        <h3 className="text-xl font-semibold text-lime-500 mb-4">Live Link</h3>
        <Link
          to="https://adventurea-6c894.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-500"
        >
          https://adventurea-6c894.web.app/
        </Link>

        <h3 className="text-xl font-semibold text-lime-500 mb-4">
          GitHub Link
        </h3>
        <div className="flex flex-col space-y-2">
          <span>
            Client Link:{" "}
            <Link
              to="https://github.com/yasin-sorkar47/Adventurea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-500"
            >
              https://github.com/yasin-sorkar47/Adventurea
            </Link>
          </span>
        </div>

        {/* Challenges */}
        <h3 className="text-xl font-semibold text-lime-500 mb-4 mt-6">
          Challenges Faced
        </h3>
        <ul className="list-disc pl-5 text-gray-500 mb-4">
          <li>
            <strong>Data Fetching:</strong> Implementing asynchronous data
            fetching from Firebase was challenging, as managing state and
            ensuring proper loading indicators was crucial for the user
            experience.
          </li>
          <li>
            <strong>Authentication:</strong> Firebase Authentication had some
            initial challenges, particularly in terms of managing user sessions
            and securely handling authentication tokens.
          </li>
          <li>
            <strong>Responsive Design:</strong> Making sure the website is fully
            responsive across all devices was a complex task, especially when
            integrating third-party APIs and optimizing images.
          </li>
        </ul>

        {/* Improvements */}
        <h3 className="text-xl font-semibold text-lime-500 mb-4 mt-6">
          Areas for Improvement
        </h3>
        <ul className="list-disc pl-5 text-gray-500 mb-4">
          <li>
            <strong>Performance Optimization:</strong> Although the website
            works well on most devices, it can be further optimized by lazy
            loading images and splitting JavaScript files for faster loading
            times.
          </li>
          <li>
            <strong>SEO Optimization:</strong> Future improvements include
            improving SEO by implementing proper meta tags and optimizing
            content for search engines, which will help increase organic
            traffic.
          </li>
          <li>
            <strong>Advanced Features:</strong> I am considering implementing
            features such as offline support, push notifications for tour
            updates, and integrating a payment gateway for direct bookings.
          </li>
          <li>
            <strong>Admin Dashboard:</strong> The current version lacks a
            full-fledged admin dashboard for managing bookings, customer
            inquiries, and analytics. Building this will be a priority in future
            updates.
          </li>
          <li>
            <strong>Mobile-First Design:</strong> While the website is
            responsive, further refinement in the mobile version's navigation
            experience will provide better usability, especially for users on
            smaller screens.
          </li>
        </ul>

        <div className="mt-6">
          <Link to="/">
            {" "}
            <button className="bg-lime-500 text-white py-2 px-4 rounded-lg">
              Back to Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EcoDetails;
