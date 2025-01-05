import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/navbar/Navbar";

export default function Main() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
