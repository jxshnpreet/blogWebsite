import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Fb, Instagram, Logo } from "../../../public/icons";
import Twitter from "../../../public/icons/Twitter";
import Link from "next/link";
import MenuComponent from "../MenuComponent";
import MenuIcon from '@mui/icons-material/Menu';

const Wrapper = styled.div``;

const MenuWrap = styled.div`
  gap: 15px;
  display: flex;
  align-items: end;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const UL = styled.ul`
  font-size: 14px;
  font-weight: 600 !important;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  // Function to handle click outside of menu
  const handleClickOutside = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  return (
    <div className="container">
      <Wrapper className=" d-flex justify-content-between align-items-center m-4">
        <span>
          <Link href="/">
          <Logo />
          </Link>
        </span>
        <MenuWrap>
          <UL className=" list-unstyled d-flex gap-4 me-5">
            <Link style={{ textDecoration: "none", color: "#000" }} href="/" passHref>
              <li>Home</li>
            </Link>
            <li>About</li>
            <li>Contact</li>
          </UL>

          <div style={{ cursor: "pointer" }} className="d-flex gap-2">
            <Fb />
            <Twitter />
            <Instagram />
          </div>
          
        </MenuWrap>
        <MenuWrapper>
          <div className="d-flex">
          <MenuIcon onClick={toggleMenu} />
            {/* <MenuComponent/> */}
          </div>
          </MenuWrapper>
      </Wrapper>

        {menuOpen && <MenuComponent menuRef={menuRef} ref={menuRef} />}


    </div>
  );
}
