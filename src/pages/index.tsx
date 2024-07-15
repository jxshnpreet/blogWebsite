import Header from "@/Components/Header"
import Footer from "@/Components/Footer"
import HeroComponent from "@/Components/HeroComponent";
import Layout from "@/Components/Layout";
import Article from "@/Components/Articles";
import SoloArticle from "@/Components/Solo-Article";
import { client } from "@/sanity";
import { PropsArticles } from '../interface';

const Home = ({articles} : any) => {
  return (
    <>
     <HeroComponent />
     <Article articles={articles}/>
    </>
  );
}

export async function getStaticProps() {
  const articles = await client.fetch(`*[_type == "article"]{
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
    trending,
    slug,
    content
  }`);
  return {
    props: {
      articles,
    },
  };
}

export default Home;