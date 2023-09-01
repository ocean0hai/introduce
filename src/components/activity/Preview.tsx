import { Image } from "antd";
import { getAssetUrl } from "@/utils/getImgSrc";
interface propsType {
  img: string;
}
export default function Preview({ img }: propsType) {
  const imgsrc = getAssetUrl(`activity/${img}.jpg`);
  return (
    <div>
      {imgsrc}
      <Image
        width={"100%"}
        height={"100%"}
        src={imgsrc}
        preview={{
          src: imgsrc,
        }}
      />
    </div>
  );
}
