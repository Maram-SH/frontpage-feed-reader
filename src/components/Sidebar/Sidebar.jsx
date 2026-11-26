import { NavLink } from "react-router";
import { FiPlus, FiRss, FiCompass, FiCalendar, FiSettings } from "react-icons/fi";
import "./Sidebar.css"

function Sidebar({ isSideBarOpen, closeSideBar}) {
  const mockFeeds = [
    { name: "CSS-Tricks", unread: 6 },
    { name: "Smashing Magazine", unread: 15 },
    { name: "Josh W. Comeau", unread: 100 },
    { name: "Backend", unread: 6 }
  ];

  return (
    <aside 
      id="main-navigation" 
      className={`sidebar ${isSideBarOpen ? "is-open" : ""}`}
      aria-hidden={!isSideBarOpen && window.innerWidth <= 768}
    >
      <nav className="nav-links sidebar-section" aria-label="Main navigation">
        <span className="section-label">
          main
        </span>

        <NavLink 
          to="/"
          end 
          className="nav-link"
          onClick={closeSideBar}
        >
          <FiRss aria-hidden="true" />
          Feed
        </NavLink>

        <NavLink 
          to="/discover" 
          className="nav-link"
          onClick={closeSideBar}
        >
          <FiCompass aria-hidden="true" />
          Discover
        </NavLink>

        <NavLink 
          to="/digest" 
          className="nav-link"
          onClick={closeSideBar}
        >
          <FiCalendar aria-hidden="true" />
          Digest
        </NavLink>
      </nav>

      <hr />

      <section className="feeds-section sidebar-section">
        <div className="feeds-header">
          <span className="section-label">
            your feeds
          </span>

          <button 
            type="button"
            className="add-feed"
            aria-label="Add feed"
          >
            <FiPlus />
          </button>
        </div>

        <ul className="feed-list">
          {mockFeeds.slice(0, 3).map((feed) => (
            <li className="feed-item" key={feed.name}>
              <FiRss />

              <span className="feed-name">
                {feed.name}
              </span>

              <span className="unread-count">
                {feed.unread < 100 ? feed.unread : "99+"}
              </span>
            </li>
          ))}
        </ul>

        { mockFeeds.length > 3 && (
          <button type="button" className="view-feeds">
            View all feeds...
          </button> 
        )}

      </section>

      <hr />

      <section className="controls-section sidebar-section">
        <span className="section-label">
          controls
        </span>
        <button 
          type="button"
          className="control-button"
          aria-label="Open settings"
        >
          <span className="settings-icon">
            <FiSettings aria-hidden="true" />
          </span>
          <span>Settings</span>
        </button>
        <button
          type="button" 
          className="control-button"
          aria-label="Open profile menu"
        >
          <span className="profile-avatar" aria-hidden="true">GS</span>

          <span>Profile</span>
        </button>
      </section>

    </aside>
  )
}

export default Sidebar;