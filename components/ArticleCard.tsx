import { MoveUpRight, Clock } from "lucide-react";
import { categoryColors } from "@/lib/category-colors";
import Link from "next/link";
type ArticleCardType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  content: string[];
};

export const ArticleCard = (props: ArticleCardType) => {
  const { id, slug, title, description, category, image, imageAlt, author, date, content } = props;
  const categoryColor = categoryColors[category];
  return (
    <Link
      href={`/news/${slug}`}
      className="text-black mt-5 w-full sm:h-125 sm:w-full md:w-full lg:w-full border border-[#E7E5E4] rounded-xl flex flex-col overflow-hidden hover:shadow-[0_0_5px_#C44724] transition-all duration-300 hover:-translate-y-2"
    >
      <div className="w-full relative overflow-hidden">
        <div className={`absolute z-10 p-1.5 rounded-xl flex items-center justify-center left-4 top-4 ${categoryColor}`}>
          <div className="text-xs">{category}</div>
        </div>
        <div className="absolute z-10 flex items-center gap-1 text-xs top-50.5 left-4 text-[#FFFFFF]">
          <Clock size={14} />
          <span>1 min ago</span>
        </div>
        <img className="w-full h-50 sm:h-57.5 md:h-62.5 lg:h-62.5 object-cover" src={image} alt={imageAlt} />
      </div>

      <div className="flex flex-col p-4 sm:p-5 md:p-6">
        <div className="text-[#1C1917] text-base sm:text-lg md:text-xl tracking-tight ">{title}</div>

        <div className="text-[#57534E] text-xs sm:text-sm mt-3 tracking-tight leading-6">{description}</div>

        <div className="border-t border-[#E2E2DA] mt-6 sm:mt-8"></div>

        <div className="flex items-center gap-3 mt-4">
          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full shrink-0 flex items-center justify-center border ${categoryColor}`}>
            <div className="text-3">
              {author
                .split(" ")
                .map((i) => i[0])
                .join("")}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-xs sm:text-sm text-[#1C1917]">{author}</div>
            <div className="text-[10px] sm:text-xs text-[#78716C]">{date}</div>
          </div>
          <div className="ml-auto w-9 h-9 rounded-full bg-[#FFF7ED] shrink-0 flex items-center justify-center border border-[#C44724]">
            <MoveUpRight className="text-[#C44724] h-1.8 w-1.8" />
          </div>
        </div>
      </div>
    </Link>
  );
};
