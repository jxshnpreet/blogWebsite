import Image from "next/image";
import React from "react";
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
import urlFor from "@/utils/image";

const Category = styled.span`
  font-family: Jost;
  font-size: 12px;
  font-weight: 600;
  background: #000;
  color: #fff;
  border-radius: 30px;
  padding: 10px 25px;
`;

const H2 = styled.h2`
  font-size: 26px;
  font-weight: 700;
  line-height: 39px;
`;

const Info = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #808080;
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
`;

const ReadMore = styled.span`
  font-family: Jost;
  font-size: 14px;
  font-weight: 500;
`;

const SoloArticle = ({
  title,
  category,
  author,
  description,
  date,
  slug,
  image
}: {
  title: string;
  category: string;
  author: string;
  description: string;
  date: string;
  slug: string;
  image: any;
}) => {
  return (
    <div className="d-flex justify-content-center mb-3">
      <div className="me-3">
        <Image src={Article1} alt="Article-1" height={292} width={292} />
        {/* {image && <img src={urlFor(image)?.height(292).width(292).url() || ""} />} */}
      </div>
      <div className="p-3">
        <Category>{category}</Category>
        <H2 className="mt-4">{title}</H2>
        <Info>
          By <Span>{author}</Span> <Time /> {date}
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
  );
};

export default SoloArticle;
