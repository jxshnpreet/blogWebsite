import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Lightning, Time } from "../../../public/icons";
import Trending1 from "../../../public/images/Trending1.png";
import Trending2 from "../../../public/images/Trending2.png";
import Trending3 from "../../../public/images/Trending3.png";
import Trending4 from "../../../public/images/Trending4.png";
import { urlFor } from "@/utils/image";
import Link from "next/link";

const H2 = styled.h2`
  font-size: 17px;
  font-weight: 700;
  line-height: 25.5px;
  /* width: 75%; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3.5em;
`;

const Info = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #808080;
`;

const ImageWrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: -15px;
    left: -15px;
  }
`;

const TrendingArticle = ({
  title,
  date,
  image,
  slug
}: {
  title: string;
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
    <div className="d-flex justify-content-start">
      <div className="me-2 d-flex align-items-center">
        <ImageWrapper>
          {/* <Image src={imgUrl} alt="Article-1" height={76.36} width={105} /> */}
          <img src={urlFor(`${image}`)?.width(105).height(77).url()} style={{borderRadius: "5px"}} />
          <Lightning />
        </ImageWrapper>
      </div>
      <div className="p-2">
        <Link
          style={{ textDecoration: "none", color: "#000", cursor: "pointer" }}
          href={`/${slug}`}
        >
          <H2 className="mt-3">{title}</H2>
        </Link>
        <Info className="d-flex align-items-center">
          <Time className="me-1" /> {formattedDate} - 2 min
        </Info>
      </div>
    </div>
  );
};

export default TrendingArticle;
