import React from "react";
import {
  Fb,
  Instagram,
  Line,
  Linkdin,
  Time,
  Twitter,
} from "../../public/icons";
import styled from "styled-components";
import Image from "next/image";
import Solo from "../../public/images/solo.png";
import { GetStaticPaths, GetStaticProps } from "next";
import { PortableText } from "next-sanity";
import { client } from "@/sanity";
import urlFor from "@/utils/image";

const Share = styled.span`
  font-family: Jost;
  font-size: 14px;
  font-weight: 400;
`;

const H2 = styled.h2`
  font-family: Poppins;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  width: 90%;
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
const Category = styled.span`
  font-family: Jost;
  font-size: 12px;
  font-weight: 600;
  background: #000;
  color: #fff;
  border-radius: 30px;
  padding: 10px 25px;
`;

const P = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  color: #808080;
  padding: 3rem;
`;

const Wrapper = styled.div`
  padding-left: 125px;
`;

const Title = styled.h3`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
`;


const SingleArticle = ({ articles }: any) => {
  const {content, name,  author, category, slug, description, image, _createdAt, trending} = articles;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-12 col-lg-2">
          <div className="d-flex flex-column align-items-center gap-2">
            <Share>SHARE</Share>
            <Line />
            <Fb />
            <Twitter />
            <Instagram />
            <Linkdin />
          </div>
        </div>
        <div className="col-md-10 col-12 col-lg-10">
          <div className="d-flex flex-column justify-content-center mb-3">
            <div className="p-3 d-flex flex-column align-items-center">
              <Wrapper className="pt-1">
                <Category>{category.title}</Category>
                <H2 className="mt-4">
                  {name}
                </H2>
                <Info>
                  By <Span>{author.name}</Span> <Time /> {new Date(_createdAt).toLocaleDateString()} - 2 min
                </Info>
              </Wrapper>
              <div>
                {/* <Image src={Solo} alt="Article-1" height={500} width={900} /> */}
                <img src={urlFor(image)?.height(500).width(990).url() || ""} />
              </div>
              {/* <P style={{ width: "85%", textWrap: "wrap" }} className="pt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
                tempore quos? Cum, vitae asperiores. Dicta nesciunt blanditiis,
                corrupti omnis alias exercitationem impedit voluptate incidunt
                minus culpa ipsam consequatur ad veritatis quaerat quibusdam,
                nostrum accusamus aperiam labore quas saepe temporibus illum
                nulla commodi tempora! Assumenda nihil, perferendis repudiandae
                modi dolor porro illo possimus aut quos. Dolor porro dolorem
                quas laboriosam ducimus? Repellendus suscipit fugit dolorem
                corrupti in laboriosam commodi similique et harum doloribus
                cumque nostrum quod nisi sunt mollitia assumenda quae voluptatem
                expedita ad odit animi labore, asperiores atque. Debitis amet
                laudantium cumque placeat, quam fuga non sint natus accusamus
                nisi?
              </P> */}
              <PortableText
                value={content}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-6 col-lg-6 p-0">
              <div
                style={{
                  borderTop: "1px solid #E0DEDE",
                  borderRight: "1px solid #E0DEDE",
                  borderBottom: "1px solid #E0DEDE",
                  padding: "20px",
                }}
                className="d-flex flex-column align-items-end"
              >
                <button className="button btn rounded-5 btn-secondary">
                  {" "}
                  Previous{" "}
                </button>
                <Title className="mt-3 w-75 text-end">
                  I moved across the country and never looked back
                </Title>
                <Info className="d-flex align-items-center ">
                  <Time className="me-1" /> {new Date(_createdAt).toLocaleDateString()} - 2 min
                </Info>
              </div>
            </div>
            <div className="col-md-6 col-6 col-lg-6 p-0">
              <div
                style={{
                  borderTop: "1px solid #E0DEDE",
                  borderLeft: "1px solid #E0DEDE",
                  borderBottom: "1px solid #E0DEDE",
                  padding: "20px",
                }}
              >
                <button className="button btn rounded-5 btn-secondary">
                  {" "}
                  Next{" "}
                </button>
                <Title className="mt-3 w-75">
                  Every next level of your life will demand a different
                </Title>
                <Info className="d-flex align-items-center mt-2">
                  <Time className="me-1" /> {new Date(_createdAt).toLocaleDateString()} - 2 min
                </Info>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await client.fetch(`*[_type == "article"]{
    "slug": slug.current
  }`);

  const paths = articles.map((article: any) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { slug } = params as { slug: string };

  const articles = await client.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      "image": image.asset->url,
      author->{
        name
      },
      category->{
        title
      },
      name,
      description,
      _createdAt,
      content
    }`,
    { slug }
  );

  if (!articles || articles.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles,
    },
    revalidate: 60, // Revalidate every 60 seconds
  };
};

export default SingleArticle;
