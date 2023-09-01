import { Carousel } from "react-responsive-carousel";
import { getAssetUrl } from "@/utils/getImgSrc";
interface dataType {
  img: string;
  text: string;
}
const data: Array<dataType> = [];
for (let i = 0; i < 3; i++) {
  data.push({
    img: i + 1 + "",
    text: `Legend ${i}`,
  });
}
export default function CarouselImg() {
  return (
    <div className="w-5/6 lg:w-auto mx-auto lg:mx-2">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {data.map((item, index) => {
          return (
            <div className="w-full h-[13rem]  md:h-[500px]" key={index}>
              <img
                className="w-full h-full"
                src={getAssetUrl(`swippers/${item.img}.jpg`)}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
