import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { LoginButton, LoginText, StyledLink } from "./header-style";

const navLinks = [
  {
    display: "Home",
    url: "/"
  },
  {
    display: "About",
    url: "/about"
  },
  {
    display: "Blog",
    url: "/blog"
  },
  {
    display:"Contact",
    url: "/contact"
  }
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i> NexEd Academy
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +91 9870234810
              </p>
            </div> */}
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
      {
window.location.pathname == "/" || window.location.pathname =="/login" ||window.location.pathname =="/contact" ?
      <LoginButton>
        <StyledLink to={"/login"}>{"Login"}</StyledLink>
      </LoginButton> :  <LoginButton>
        <StyledLink to={"/login"}>{"logout"}</StyledLink>
      </LoginButton>
      }
    </header>
  );
};

export default Header;
