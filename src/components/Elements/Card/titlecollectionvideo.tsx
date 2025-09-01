import Title from "../TitleForm/Title";
import Paragraph from "../TitleForm/Paragraph";

const TitleCollectionVideo = () => {
  return (
    <div className="flex flex-col md:gap-3 gap-2.5 ">
      <Title tvariant="text-left">Koleksi Video Pembelajaran Unggulan</Title>
      <Paragraph pvariant="text-left font-medium">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </Paragraph>
    </div>
  );
};

export default TitleCollectionVideo;
