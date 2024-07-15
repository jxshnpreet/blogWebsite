import React from "react";
import styled from "styled-components";
import customData from "@/data.json";
import SoloArticle from "../Solo-Article";
import TrendingArticle from "../Trending";
import { Pagination, PaginationItem, Stack } from "@mui/material";
import { PropsArticles } from '../../interface';

const H2 = styled.h2`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: #808080;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const Article = ({articles} : any) => {

  console.log("Article", articles)
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-12 col-lg-8">
          <div className="m-5">
            <div className="mb-5">
              <H2>Articles</H2>
              <P>View the latest news on Blogger</P>
            </div>

            { articles && articles.map((Data: any, index: number) => (
              <SoloArticle
                key={index}
                date="02 October 2023"
                title={Data.name}
                description={Data.description}
                category={Data.category.title}
                author={Data.author.name}
                slug={Data.slug.current}
                image={Data.image}
              />
            ))}
          </div>
        </div>
        <div className="col-md-4 col-12 col-lg-4">
          <div className="mt-5">
            <Title>TRENDING POST</Title>
            <div>
              {customData.slice(0, 4).map((Data, index) => (
                <TrendingArticle
                  key={index}
                  title={Data.title}
                  date={Data.date}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="ms-4 mt-2">
          <Stack spacing={3}>
            <Pagination count={4} size="large" />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Article;
