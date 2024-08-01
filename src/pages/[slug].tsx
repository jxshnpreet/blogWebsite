import React, { useState } from "react";
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
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import { PortableText } from "next-sanity";
import { client } from "@/sanity";
import { urlFor } from "@/utils/image";

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
  width: 94%;
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

const Wrapper = styled.div`
  padding-left: 75px;
`;

const Title = styled.h3`
  font-family: Jost;
  font-size: 20px;
  font-weight: 700;
`;

const PortableWrapper = styled.div`
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    padding-inline: 40px;
  }
  h3,
  h4 {
    font-family: "Jost";
    font-size: 26px;
    font-weight: 600;
    letter-spacing: 0.5px;
    padding-inline: 40px;
  }
`;

const SingleArticle = ({ articles, nextArticle, previousArticle }: any) => {
  const router = useRouter();

  const {
    content,
    name,
    author,
    category,
    slug,
    image,
    _createdAt,
  } = articles;

  const formattedDate = new Date(_createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const handleNavigation = (slug: string) => {
    router.push(`/${slug}`);
  };

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
            <div className="p-3 d-flex flex-column align-items-start">
              <Wrapper className="pt-1">
                <Category>{category.title}</Category>
                <H2 className="mt-4">{name}</H2>
                <Info>
                  By <Span>{author.name}</Span> <Time /> {formattedDate} - 2 min
                </Info>
              </Wrapper>
              <div
                className="mb-5 mt-5"
                style={{
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "15px",
                }}
              >
                <img
                  src={urlFor(image)?.height(500).width(1040).fit("max").url()}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
              <PortableWrapper>
                <PortableText value={content} />
              </PortableWrapper>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-6 col-lg-6 p-0">
              {previousArticle && (
                <div
                  style={{
                    borderTop: "1px solid #E0DEDE",
                    borderRight: "1px solid #E0DEDE",
                    borderBottom: "1px solid #E0DEDE",
                    padding: "20px",
                    height: "100%"
                  }}
                  className="d-flex flex-column align-items-end"
                >
                  <button
                    className="button btn rounded-5 btn-secondary"
                    onClick={() => handleNavigation(previousArticle.slug)}
                  >
                    {" "}
                    Previous{" "}
                  </button>
                  <Title className="mt-3 w-75 text-end">
                    {previousArticle.name}
                  </Title>
                  <Info className="d-flex align-items-center ">
                    <Time className="me-1" />{" "}
                    {new Date(previousArticle._createdAt).toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "numeric", day: "numeric" }
                    )}{" "}
                    - 2 min
                  </Info>
                </div>
              )}
            </div>
            <div className="col-md-6 col-6 col-lg-6 p-0">
              {nextArticle && (
                <div
                  style={{
                    borderTop: "1px solid #E0DEDE",
                    borderLeft: "1px solid #E0DEDE",
                    borderBottom: "1px solid #E0DEDE",
                    padding: "20px",
                    height: "100%"
                  }}
                >
                  <button
                    className="button btn rounded-5 btn-secondary"
                    onClick={() => handleNavigation(nextArticle.slug)}
                  >
                    {" "}
                    Next{" "}
                  </button>
                  <Title className="mt-3 w-75">{nextArticle.name}</Title>
                  <Info className="d-flex align-items-center mt-2">
                    <Time className="me-1" />{" "}
                    {new Date(nextArticle._createdAt).toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "numeric", day: "numeric" }
                    )}{" "}
                    - 2 min
                  </Info>
                </div>
              )}
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

  try {
    // Fetch current article
    const currentArticleQuery = `*[_type == "article" && slug.current == $slug][0]{
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
    }`;
    
    const articles = await client.fetch(currentArticleQuery, { slug });

    if (!articles) {
      return {
        notFound: true,
      };
    }

    // Fetch previous article
    const previousArticleQuery = `*[_type == "article" && _createdAt < $date] | order(_createdAt desc) [0]{
      "slug": slug.current,
      name,
      _createdAt
    }`;
    const prevArticle = await client.fetch(previousArticleQuery, { date: articles._createdAt });

    // Fetch next article
    const nextArticleQuery = `*[_type == "article" && _createdAt > $date] | order(_createdAt asc) [0]{
      "slug": slug.current,
      name,
      _createdAt
    }`;
    const nextArticle = await client.fetch(nextArticleQuery, { date: articles._createdAt });

    return {
      props: {
        articles,
        previousArticle: prevArticle || null,
        nextArticle: nextArticle || null,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};

export default SingleArticle;
