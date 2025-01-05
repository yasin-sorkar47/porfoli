import { Link } from "react-router-dom";

const LearnSkills = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto mt-20">
      <h2 className="text-4xl font-bold text-lime-500 text-center mb-8">
        LearnSkills - Details
      </h2>

      <div className="bg-white shadow-lg p-8 rounded-lg">
        <h3 className="text-xl font-semibold text-lime-500 mb-4">
          Description
        </h3>
        <p className="text-gray-500 mb-4">
          LearnSkills Circle is a food delivery web application that allows
          users to browse, order, and track courses deliveries. Built with React
          and Firebase.
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
          to="https://online-education-326ed.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-500"
        >
          https://online-education-326ed.web.app/
        </Link>

        <h3 className="text-xl font-semibold text-lime-500 mb-4">
          GitHub Links
        </h3>
        <div className="flex flex-col space-y-2">
          <span>
            Client Link:{" "}
            <Link
              to="https://github.com/yasin-sorkar47/Learn-skill-client"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-500"
            >
              https://github.com/yasin-sorkar47/Learn-skill-client
            </Link>
          </span>
          <span>
            Server Link:{" "}
            <Link
              to="https://github.com/yasin-sorkar47/Learn-skill-server"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-500"
            >
              https://github.com/yasin-sorkar47/Learn-skill-server
            </Link>
          </span>
        </div>

        <h3 className="text-xl font-semibold text-lime-500 mb-4">
          Challenges Faced
        </h3>
        <ul className="list-disc pl-5 text-gray-500 mb-4">
          <li>
            <strong>Real-Time Data Updates:</strong> Synchronizing the food
            delivery status in real-time with Firebase, ensuring updates are
            reflected instantly on the user interface.
          </li>
          <li>
            <strong>Handling User Authentication:</strong> Implementing a smooth
            login/logout process using Firebase authentication, especially for
            users who may forget their credentials.
          </li>
          <li>
            <strong>Responsive Design:</strong> Ensuring the app works
            flawlessly across a wide range of devices, maintaining usability
            even on small mobile screens.
          </li>
          <li>
            <strong>Optimizing Firebase Queries:</strong> Handling a large
            number of users and orders without compromising app performance by
            optimizing Firebase queries.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-lime-500 mb-4">
          What Needs Improvement
        </h3>
        <ul className="list-disc pl-5 text-gray-500 mb-4">
          <li>
            <strong>Order Tracking:</strong> Improving the order tracking
            feature to show more detailed progress updates, such as delivery
            time and real-time location of the delivery person.
          </li>
          <li>
            <strong>Search Functionality:</strong> Enhancing the search feature
            to allow users to filter food items based on various parameters like
            cuisine, price range, and rating.
          </li>
          <li>
            <strong>User Reviews:</strong> Adding a review and rating system for
            food items, allowing users to leave feedback and improve the overall
            user experience.
          </li>
          <li>
            <strong>Push Notifications:</strong> Implementing push notifications
            to alert users about order status updates, new offers, or upcoming
            promotions.
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
    </section>
  );
};

export default LearnSkills;
