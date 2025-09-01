import { useState } from "react";

const categories = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Bisnis ",
];

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("Semua Kelas");
  return (
    <ul className="flex flex-wrap gap-7 text-sm font-medium leading-[140%] tracking-[0.2px] md:text-base ">
      {categories.map((category) => (
        <li
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`cursor-pointer transition duration-300 ease-in-out relative ${
            activeCategory === category
              ? "  text-[#F64920] after:absolute after:-bottom-3 after:w-1/2 after:h-1.5 after:left-0 after:rounded-full after:bg-[#F64920] "
              : "text-[#333333AD]"
          }`}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryTabs;
