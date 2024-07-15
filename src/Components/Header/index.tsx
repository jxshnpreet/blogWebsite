import React from "react";
import styled from "styled-components";
import { Fb, Instagram, Logo } from "../../../public/icons";
import Twitter from "../../../public/icons/Twitter";
import Link from "next/link";

const Wrapper = styled.div``;

const MenuWrap = styled.div`
  gap: 15px;
`;

const UL = styled.ul`
  font-size: 14px;
  font-weight: 600 !important;
  cursor: pointer;
`;

export default function Header() {
  return (
    <div className="container">
      <Wrapper className=" d-flex justify-content-between align-items-center m-4">
        <span>
          <Link href="/">
          <Logo />
          </Link>
        </span>
        <MenuWrap className=" d-flex align-items-end">
          <UL className=" list-unstyled d-flex gap-4 me-5">
            <Link style={{ textDecoration: "none", color: "#000" }} href="/">
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
      </Wrapper>
    </div>
  );
}
