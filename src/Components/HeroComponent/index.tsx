import Image from "next/image";
import React from "react";
import icon from "../../../public/images/icon.png";
import hero from "../../../public/images/Hero.png";
import styled from "styled-components";
import { Time } from "../../../public/icons";

const Span = styled.span`
  color: #808080;
  font-weight: 500;
  font-size: 26px;
`;

const H4 = styled.h4`
  font-size: 26px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const H1 = styled.h1`
  font-family: Jost;
  font-size: 50px;
  font-weight: 700;
  line-height: 60px;
`;

const P = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #808080;
`;

const ImageWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 10px 25px 40px 0px #12151a26;
  position: relative;
  width: 100%;
  height: 400px;
`;

const HeroComponent = () => {
  return (
    <div className="container">
      <div className="row m-5">
        <div className=" col-md-6 col-12 col-lg-6">
          <div>
            <Image
              src={icon}
              alt="hero-icon"
              height={80}
              width={80}
              className="mt-2"
            />
            <H4>
              <Span>By</Span> Mary Astor
            </H4>
          </div>
          <div className="d-flex flex-column">
            <H1>Every Next Level Of Your Life Will Demand</H1>
            {/* <Typo>Of Your Life Will</Typo>
            <Typo>Demand</Typo> */}
          </div>
          <div>
            <P className="d-flex align-items-center">
              <Time style={{ marginRight: "4px" }} />
              October 19, 2020 - 3 min read
            </P>
          </div>
        </div>
        <div className="col-md-6 col-12 col-lg-6">
          <ImageWrapper>
            <Image src={hero} alt="hero-img" fill />
          </ImageWrapper>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
