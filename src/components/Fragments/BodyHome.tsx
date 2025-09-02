import WideCard from "../Elements/WideCard/Index";
import Title from "../Elements/TitleForm/Title";
import Paragraph from "../Elements/TitleForm/Paragraph";
import CategoryTabs from "../Elements/List/index";
// import Data from "../../data/cardClass";
import Card from "../Elements/Card/index";
import Button from "../Elements/Button";
import Input from "../Elements/Input/Input";
import TitleCollectionVideo from "../Elements/Card/titlecollectionvideo";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api/product.service";
import type { Product } from "../../services/api/product.service";

const HeroSection = () => (
  <WideCard variant="topcard">
    <div className="flex flex-col gap-3">
      <Title tvariant="text-white font-bold md:text-5xl">
        Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
        Interaktif!
      </Title>
      <Paragraph pvariant="text-white">
        Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
        pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
        berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman
        Anda.
      </Paragraph>
    </div>
    <Button
      label="Temukan Video Course untuk Dipelajari!"
      bg="bg-[#3ECF4C]"
      textColor="text-white md:max-w-92 md:text-base text-sm font-normal"
    />
  </WideCard>
);

const CourseSection = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    getProduct((data) => {
      console.log(data);
      setProduct(data);
    });
  }, []);

  return (
    <div className="flex flex-col md:gap-8 gap-6 md:w-300 w-80">
      <TitleCollectionVideo />
      <CategoryTabs />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.length > 0 &&
          product.slice(0, 9).map((item) => <Card key={item.id} {...item} />)}
      </div>
    </div>
  );
};

const NewsletterSection = () => (
  <WideCard variant="lowercard">
    <div className="flex flex-col items-center justify-center gap-10 md:w-[525px] w-full">
      <div>
        <p className="font-medium text-[18px] leading-[140%] tracking-[0.2px] text-[#C1C2C4] text-center">
          NEWSLETTER
        </p>
        <div className="flex flex-col gap-2.5 items-center justify-center">
          <h1 className="text-white font-poppins font-semibold text-[32px] leading-[120%] text-center">
            Mau Belajar Lebih Banyak?
          </h1>
          <p className="font-normal text-base leading-[140%] tracking-[0.2px] text-[#F4F5FA] text-center">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hariesok.id
          </p>
        </div>
      </div>
      <div className="md:relative w-full flex flex-col gap-4">
        <Input
          placeholder="Masukan Emailmu"
          name="email"
          type="email"
          variant="bg-white pl-8 rounded-[10px] md:h-[58px]"
        />
        <Button
          label="Subscribe"
          bg="bg-[#FFBD3A] md:max-w-[132px]"
          textColor="text-white md:max-w-92 text-base md:absolute md:right-2 md:top-1/2 md:transform md:-translate-y-1/2 h-10"
        />
      </div>
    </div>
  </WideCard>
);

const BodyHome = () => (
  <>
    <HeroSection />
    <CourseSection />
    <NewsletterSection />
  </>
);

export default BodyHome;
