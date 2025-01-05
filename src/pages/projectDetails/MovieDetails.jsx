import { Link } from "react-router-dom";

const MovieDetails = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-20">
      <h2 className="text-4xl font-bold text-lime-500 text-center mb-8 mt-20">
        Movie Flix - Details
      </h2>

      <div className="bg-white shadow-lg p-8 rounded-lg">
        <h3 className="text-xl font-semibold text-lime-500 mb-4">
          Description
        </h3>
        <p className="text-gray-500 mb-4">
          Movie Flix is a movie browsing application that fetches real-time data
          from APIs to show information about trending movies and TV shows. It
          uses The Movie DB API to provide users with details such as movie
          descriptions, ratings, and more.
        </p>

        <h3 className="text-xl font-semibold text-lime-500 mb-4">
          Technologies Used
        </h3>
        <ul className="list-disc pl-5 text-gray-500 mb-4">
          <li>React</li>
          <li>The Movie DB API</li>
          <li>Tailwind CSS</li>
        </ul>

        <h3 className="text-xl font-semibold text-lime-500 mb-4">Live Link</h3>
        <Link
          to="https://movfix-99724.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-500"
        >
          https://movfix-99724.web.app/
        </Link>

        <h3 className="text-xl font-semibold text-lime-500 mb-4">
          GitHub Link
        </h3>
        <div className="flex flex-col space-y-2">
          <span>
            Client Link:{" "}
            <Link
              to="https://github.com/yasin-sorkar47/Movie-potal-PH-A-10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-500"
            >
              https://github.com/yasin-sorkar47/Movie-potal-PH-A-10
            </Link>
          </span>
          <span>
            Server Link:{" "}
            <a
              href="https://github.com/yasin-sorkar47/Movie-Portal-Server-Site"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-500"
            >
              https://github.com/yasin-sorkar47/Movie-Portal-Server-Site
            </a>
          </span>
        </div>

        <h3 className="text-xl font-semibold text-lime-500 mb-4">
          Challenges Faced
        </h3>
        <ul className="list-disc pl-5 text-gray-500 mb-4">
          <li>
            <strong>API Rate Limiting:</strong> The Movie DB API has rate
            limits, which required efficient handling of requests to avoid
            exceeding them.
          </li>
          <li>
            <strong>Asynchronous Data Handling:</strong> Ensuring smooth UI
            updates while handling asynchronous data fetches efficiently.
          </li>
          <li>
            <strong>Responsive Layout:</strong> Designing a layout that adapts
            well to both desktop and mobile devices, maintaining functionality
            and usability.
          </li>
          <li>
            <strong>State Management:</strong> Managing the app’s state across
            various components, especially for handling dynamic movie data.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-lime-500 mb-4">
          What Needs Improvement
        </h3>
        <ul className="list-disc pl-5 text-gray-500 mb-4">
          <li>
            <strong>Pagination:</strong> Implementing pagination to handle large
            sets of data from the API, improving performance.
          </li>
          <li>
            <strong>Search Functionality:</strong> Enhancing the search
            functionality to allow for more refined filtering options such as
            genres, ratings, and actors.
          </li>
          <li>
            <strong>User Authentication:</strong> Adding an authentication
            system to enable users to log in, save their favorite movies, and
            personalize their experience.
          </li>
          <li>
            <strong>Error Handling:</strong> Improving error handling for cases
            where the API fails to load data or returns incomplete results.
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

export default MovieDetails;
