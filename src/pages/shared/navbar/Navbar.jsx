export default function Navbar() {
  const options = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
    </>
  );

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {options}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl relative ">
          <span className="bg-orange-500 p-3 rounded-full absolute left-1 top-[10px] -z-10"></span>
          YasinDev
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{options}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-orange-500 hover:bg-orange-600 rounded-full">
          Hire me
        </a>
      </div>
    </div>
  );
}
