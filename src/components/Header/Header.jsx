import { NavLink } from "react-router";
import { FiSearch } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import "./Header.css";

function Header({ isSideBarOpen, toggleSideBar }) {
  return (
    <header>
      <div className="left">
        <button 
          className="expand-menu"
          type="button"
          aria-label={isSideBarOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isSideBarOpen}
          aria-controls="main-navigation"
          onClick={toggleSideBar}
        >
          { isSideBarOpen ? 
            <MdOutlineClose aria-hidden="true" /> : 
            <FaBars aria-hidden="true" /> 
          }
        </button>

        <h1>Frontpage</h1>
      </div>

      <div className="right">
        <form className="search-container" role="search">
          <label htmlFor="search" className="sr-only">
            Search articles
          </label>

          <FiSearch className="search-icon" aria-hidden="true" />

          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search articles..."
          />
        </form>

        <button className="profile">
          GS
        </button>
      </div>
    </header>
  )
}

export default Header;