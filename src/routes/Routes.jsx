import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import EcoDetails from "../pages/projectDetails/EcoDetails";
import LearnSkills from "../pages/projectDetails/LearnSkills";
import MovieDetails from "../pages/projectDetails/MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/01",
        element: <MovieDetails />,
      },
      {
        path: "/details/02",
        element: <EcoDetails />,
      },
      {
        path: "/details/03",
        element: <LearnSkills />,
      },
    ],
  },
]);

export { router };
