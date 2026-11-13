import React from "react";
import data from "@/data/news.json";
import { ArticleCard } from "@/components/ArticleCard";
import { categoryColors } from "@/lib/category-colors";
import Link from "next/link";
import NotFound from "@/app/notfound";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { title } from "process";

export async function generateMetadata({ params }: ArticleDetailPageType): Promise<Metadata> {
  const { slug } = await params;
  const foundArticle = data.find((article) => article.slug === slug);
  if (!foundArticle) notFound();

  return {
    title: foundArticle.title,
    description: foundArticle.description,
    openGraph: {
      type: "article",
      siteName: "The Daily",
      title: foundArticle.title,
      description: foundArticle.description,
      images: [{ url: foundArticle.image, alt: foundArticle.imageAlt }],
    },
  };
}

type ArticleDetailPageType = {
  params: Promise<{ slug: string }>;
};
export const instant = false;
export async function generateStaticParams() {
  return data.map((news) => ({ slug: news.slug }));
}
const ArticleDetailPage = async ({ params }: ArticleDetailPageType) => {
  const { slug } = await params;
  const foundArticle = data.find((article) => article.slug === slug);
  if (!foundArticle) {
    notFound();
  }
  const related = data.filter((article) => article.category === foundArticle.category && article.id !== foundArticle.id);
  const categoryColor = categoryColors[foundArticle.category];
  return (
    <div id="top" className="w-full bg-[#FAF9F6]">
      <div className="w-full max-w-300 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-8 lg:pt-10">
        <header className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 text-2.5 text-[#22241F]">
            <ArrowLeft size={14} />
            All stories
          </Link>
          <span className="text-2.5 text-[#22241F]">/</span>
          <span className="text-2.5 text-[#22241F]">World</span>
        </header>

        <div className="border-t border-[#E2E2DA] mt-5" />

        <div className="max-w-250 mx-auto w-full mt-8 sm:mt-10">
          <div className="flex gap-3 items-center">
            <div className={`px-2 py-1 rounded-lg flex items-center text-[10px] border ${categoryColor}`}>{foundArticle.category}</div>
            <span className="text-[#65675F] text-2.5">-</span>
            <span className="text-[#65675F] text-2.5">THE DAILY</span>
          </div>

          <div className="mt-4 max-w-250 text-[30px] sm:text-[38px] lg:text-[50px] font-bold leading-[1.08] tracking-[-1.2px] text-[#171815]">{foundArticle.title}</div>
          <div className="mt-5 text-[#57534E] text-[18px]">{foundArticle.description}</div>
          <div className="border-t border-[#E2E2DA] mt-5"></div>
          <div className="flex flex-wrap items-center mt-5 gap-x-6 gap-y-6">
            <div className="flex items-center gap-3 shrink-0">
              <div className={`w-12 h-12 sm:w-12 sm:h-12 rounded-full shrink-0 flex items-center justify-center border ${categoryColor}`}>
                <div className="text-3">
                  {foundArticle.author
                    .split(" ")
                    .map((i) => i[0])
                    .join("")}
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-[#65675F] text-[10px] whitespace-nowrap">WRITTEN BY</div>
                <div className="text-[#22241F] text-3.5 whitespace-nowrap">{foundArticle.author}</div>
              </div>
            </div>

            <div className="flex items-center gap-6 shrink-0">
              <div className="flex flex-col">
                <div className="text-[#65675F] text-[10px] whitespace-nowrap">PUBLISHED</div>
                <div className="text-3.5 text-[#22241F] whitespace-nowrap">{foundArticle.date}</div>
              </div>

              <div className="flex flex-col">
                <div className="text-[#65675F] text-[10px] whitespace-nowrap">READING TIME</div>
                <div className="text-3.5 text-[#22241F] whitespace-nowrap">1 min read</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-11 overflow-hidden max-w-300 mx-auto max-h-125.5 rounded-xl flex items-center">
          <img src={foundArticle.image} alt={foundArticle.imageAlt} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col sm:flex-row  gap-1 sm:gap-2 mt-2">
          <div className="text-2.5 text-[#65675F]">Modern architecture surrounded by greenery</div>

          <div className="text-2.5 text-[#65675F] sm:text-right">Illustrative photography · Unsplash</div>
        </div>
        <div className="flex justify-center w-full mt-8 sm:mt-12 ">
          <div className="text-[#E2E2DA] flex flex-col w-full sm:w-[85%] lg:w-192  p-5 sm:p-8 lg:p-10 border border-[#E2E2DA] rounded-xl">
            <div className="text-[#C44724] text-xs ml-2 sm:ml-5 tracking-widest shrink-0">THE STORY</div>
            <div>
              {foundArticle.content.map((paragraph, index) => (
                <p key={index} className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#44403C]">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="text-center text-[#C44724] text-xl mt-3 shrink-0">. . .</div>
          </div>
        </div>
        <div className="text-center text-[#65675F] text-xs mt-4">Fictional sample story · The Daily learning edition</div>
        <div className="flex justify-center items-center mt-4">
          <div className="bg-[#FFF7ED] w-full lg:w-173.5  lg:h-24.5 rounded-xl flex flex-col sm:flex-row p-5 sm:p-6 items-start sm:items-center justify-between gap-4 border border-[#E2E2DA]">
            <div className="flex flex-col gap-1">
              <div className="text-base sm:text-lg text-[#22241F]">A little more curiosity?</div>
              <div className="text-[#65675F] text-xs sm:text-sm leading-relaxed">Your next good read is just around the corner.</div>
            </div>
            <Link href="/" className="text-white bg-[#22241F] rounded-full px-5 py-3 text-sm ">
              All stories ↗
            </Link>
          </div>
        </div>
        <div className="text-[#C44724] text-xs mt-10">KEEP YOUR CURIOSITY GOING</div>
        <div className="text-3xl text-[#22241F tracking-[4px] mt-2">More to discover.</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
