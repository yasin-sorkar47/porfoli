import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import Navbar from "../../pages/shared/navbar/Navbar";

export default function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
