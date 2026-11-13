"use client";
import { useState, MouseEvent } from "react";
import data from "@/data/news.json";
import { ArticleCard } from "./ArticleCard";

const categories = ["All stories", ...new Set(data.map((article) => article.category))];

export const ArticleFeed = () => {
  const [category, setCategory] = useState("All stories");
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.id);
  };
  const filtered = data.filter((article) => category === "All stories" || article.category === category);

  return (
    <div id="top" className="w-full bg-[#FAF9F6]">
      <div className="w-full max-w-300 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pt-6 sm:pt-8 lg:pt-10">
        <header>
          <div className="text-[10px] sm:text-xs text-[#C44724]">STAY CURIOUS</div>

          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#22241F]">The latest stories.</div>

          <div className="text-[11px] hidden md:block  text-[#65675F] text-end">Big ideas. Fresh voices. Worth your time.</div>

          <div className="border-t border-[#E2E2DA] mt-4 sm:mt-6"></div>
        </header>

        <div className="flex flex-wrap gap-1 mt-3 sm:mt-4">
          {categories.map((cat, i) => (
            <button
              id={cat}
              onClick={handleClick}
              key={i}
              className={`cursor-pointer px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm rounded-sm transition-all duration-200
                         ${category === cat ? "bg-[#22241F] text-white" : "bg-white text-[#22241F] hover:bg-[hsl(84,88%,80%)] hover:text-black"} `}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="border-t border-[#E2E2DA] mt-3"></div>

        <div className="text-xs sm:text-sm md:text-base text-[#65675F] mt-4 sm:mt-5 mb-4 sm:mb-5">{data.length} stories to explore</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {filtered.map((article) => (
            <ArticleCard
              key={article.slug}
              id={article.id}
              slug={article.slug}
              title={article.title}
              description={article.description}
              category={article.category}
              image={article.image}
              imageAlt={article.imageAlt}
              author={article.author}
              date={article.date}
              content={article.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
