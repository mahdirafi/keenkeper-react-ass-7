import { ImHome, ImStatsDots } from "react-icons/im";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ml-1 flex items-center gap-1 ${isActive ? "text-white bg-[#244D3F]" : ""}`
          }
          to={"/"}
        >
          <ImHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ml-1 flex items-center gap-1 ${isActive ? "text-white bg-[#244D3F]" : ""}`
          }
          to={"/timeline"}
        >
          <MdOutlineWatchLater /> Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ml-1 flex items-center gap-1 ${isActive ? "text-white bg-[#244D3F]" : ""}`
          }
          to={"/stats"}
        >
          <ImStatsDots /> Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="text-[24px] font-semibold">
          Keen<span className="text-[#244D3F]">Keeper</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex mr-20">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default NavBar;