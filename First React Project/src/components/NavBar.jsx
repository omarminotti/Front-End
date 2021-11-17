import React, {useState} from "react";
import Menu from "./Menu";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="navbar navbar-default navbar-fixed-top navbar-custom">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                My Library
              </a>
            </div>
            <ul className="nav navbar-nav pull-right">
              <li>
              {isOpen ? <Menu openMenu={setIsOpen} isOpen={isOpen}/> : null}
                <button className="btn btn-lg btn-outline"
                 onClick={() => setIsOpen(!isOpen)}>
                  <i className="fa fa-graduation-cap" />
                  <span>Menu</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default NavBar