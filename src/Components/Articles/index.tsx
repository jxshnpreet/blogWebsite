import React, { useState } from "react";
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
  @media screen and (max-width: 575px){
    font-size: 30px;
  }
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

const Wrapper = styled.div`
  margin: 3rem;
  @media screen and (max-width: 575px){
    margin: 1rem !important;
  }
`

const Article = ({articles} : { articles: any[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate pagination boundaries
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-12 col-lg-8">
          <Wrapper>
            <div className="mb-5">
              <H2>Articles</H2>
              <P>View the latest news on Blogger</P>
            </div>

            { currentArticles.map((Data: any, index: number) => (
              <SoloArticle
                key={index}
                date={Data._createdAt}
                title={Data.name}
                description={Data.description}
                category={Data.category.title}
                author={Data.author.name}
                slug={Data.slug.current}
                image={Data.image}
              />
            ))}
          </Wrapper>
        </div>
        <div className="col-md-12 col-12 col-lg-4">
          <div className="mt-5 ms-3">
            <Title>TRENDING POST</Title>
            <div>
              {articles && articles.slice(0, 4).map((Data: any, index: number) => 
              { if(Data.trending > 4) {
                return(
                  <TrendingArticle
                    key={index}
                    title={Data.name}
                    date={Data._createdAt}
                    image={Data.image}
                    slug={Data.slug.current}
                  />
                )
              } }
              )}
            </div>
          </div>
        </div>
        <div className="ms-4 mt-2 w-auto">
          <Stack spacing={3}>
            <Pagination              
              count={Math.ceil(articles.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange} size="large" />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Article;
