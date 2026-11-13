import data from "@/data/news.json";
import { Metadata } from "next";
import { ArticleFeed } from "@/components/ArticleFeed";
const firstArticle = data[0];

export const meta: Metadata = {
  openGraph: {
    type: "website",
    siteName: "The Daily",
    title: "The Daily — A fresh perspective",
    description: "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
    images: firstArticle ? [{ url: firstArticle.image, alt: firstArticle.imageAlt }] : [],
  },
};

const Home = () => {
  return <ArticleFeed />;
};

export default Home;``
