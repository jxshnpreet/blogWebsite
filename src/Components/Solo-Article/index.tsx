import Image from "next/image";
import React, { useEffect } from "react";
import Article1 from "../../../public/images/Article1.png";
import Article2 from "../../../public/images/Article2.png";
import Article3 from "../../../public/images/Article3.png";
import Article4 from "../../../public/images/Article4.png";
import Article5 from "../../../public/images/Article5.png";
import Article6 from "../../../public/images/Article6.png";
import Article7 from "../../../public/images/Article7.png";
import styled from "styled-components";
import { RightArrow, Time } from "../../../public/icons";
import Link from "next/link";
import { urlFor } from "@/utils/image";

const Category = styled.span`
  font-family: Jost;
  font-size: 12px;
  font-weight: 600;
  background: #000;
  color: #fff;
  border-radius: 30px;
  padding: 10px 25px;
  @media screen and (max-width: 1024px){
    padding: 5px 15px;
  }
`;

const H2 = styled.h2`
  font-size: 26px;
  font-weight: 700;
  line-height: 39px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 25px;
    margin-top: 10px !important;
  }
  @media screen and (max-width: 768px){
    /* display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3.5em; */
  }
`;

const Info = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #808080;
  @media screen and (max-width: 1024px) {
    margin-bottom: 5px !important;
  }
`;

const Span = styled.span`
  font-family: Jost;
  font-size: 13px;
  font-weight: 400;
  color: #000;
`;
const P = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: #808080;
  width: 85%;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3.5em;
  @media screen and (max-width: 1024px){
    font-size: 10px;
    line-height: 17px;
    margin-bottom: 5px !important;
  }
`;

const ReadMore = styled.span`
  font-family: Jost;
  font-size: 14px;
  font-weight: 500;
`;

const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const ImageWrapperParent = styled.div`
  margin-bottom: 1rem;
  @media screen and (max-width: 575px){
    margin-bottom: 0 !important;
  }
`

const SoloArticle = ({
  title,
  category,
  author,
  description,
  date,
  slug,
  image,
}: {
  title: string;
  category: string;
  author: string;
  description: string;
  date: string;
  slug: string;
  image: any;
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return (
    <Wrapper className="row">
      <div className="col-lg-6 col-md-4 col-12">
        <ImageWrapperParent className="d-flex justify-content-center">
          <div
            className="me-3"
            style={{
              width: "100%",
              overflow: "hidden",
              borderRadius: "15px",
            }}
          >
            {/* <Image src={Article1} alt="Article-1" height={292} width={292} /> */}
            <img
              src={urlFor(`${image}`)?.width(292).height(292).url()}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                display: "block",
              }}
            />
          </div>
        </ImageWrapperParent>
      </div>
      <div className="col-lg-6 col-md-8 col-12 p-2">
          <div className="p-3 p-md-0">
            <Category>{category}</Category>
            <H2 className="mt-4">{title}</H2>
            <Info>
              By <Span>{author}</Span> <Time /> {formattedDate}
            </Info>
            <P>{description}</P>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              href={`/${slug}`}
            >
              <ReadMore className="d-flex align-items-center">
                Read More <RightArrow className="ms-2" />
              </ReadMore>
            </Link>
          </div>
        </div>
    </Wrapper>
  );
};

export default SoloArticle;
