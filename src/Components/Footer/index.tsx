import React from "react";
import styled from "styled-components";
import img1 from "../../../public/images/Image.png";
import img2 from "../../../public/images/Image (1).png";
import img3 from "../../../public/images/Image (2).png";
import img4 from "../../../public/images/Image (3).png";
import img5 from "../../../public/images/Image (4).png";
import img6 from "../../../public/images/Image (5).png";
import Image from "next/image";
import { Fb, Instagram, Logo, Twitter } from "../../../public/icons";

const Data = [
  {
    src: img1,
  },
  {
    src: img2,
  },
  {
    src: img3,
  },
  {
    src: img4,
  },
  {
    src: img5,
  },
  {
    src: img6,
  },
];

const UL = styled.ul`
  font-size: 14px;
  font-weight: 600 !important;
  cursor: pointer;
`;

const Copyright = styled.div`
  font-family: Poppins;
  font-size: 13px;
  font-weight: 700;
  height: 90px;
`;

const Footer = () => {
  return (
    <footer className="mt-5 pt-3">
      <div className="d-flex">
        {Data.map((images, index) => (
          <div
            style={{ height: "237.5px" }}
            className="position-relative w-100"
          >
            <Image src={images.src} alt="images" fill />
          </div>
        ))}
      </div>
      <div className="m-5 p-2">
        <span className="d-flex justify-content-center">
          <Logo />
        </span>
        <div className="mt-4 pt-2">
          <UL className=" list-unstyled d-flex justify-content-center gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </UL>
        </div>
        <div
          style={{ cursor: "pointer" }}
          className="d-flex justify-content-center mt-5 gap-3"
        >
          <Fb />
          <Twitter />
          <Instagram />
        </div>
      </div>
      <Copyright className=" bg-black d-flex justify-content-center align-items-center">
        <p className=" text-center text-white">
          © Copyright 2024 - All Rights Reserved by StaticMania
        </p>
      </Copyright>
    </footer>
  );
};

export default Footer;
