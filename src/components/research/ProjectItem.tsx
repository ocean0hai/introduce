import { useTranslation } from "react-i18next";
import { getAssetUrl } from "@/utils/getImgSrc";
interface propsType {
  name: string;
  img: string;
  text: string;
}
export default function ProjectItem(data: propsType) {
  const { t } = useTranslation();
  const { name, img, text } = data;
  return (
    <div className="w-auto mx-2 px-4 overflow-hidden shadow-xl">
      <div className=" mt-3">
        <div className="text-center md:my-4 md:text-[3rem] py-2 font-bold">
          {t(name)}
        </div>
        <div className="w-full md:text-[2rem] py-2">
          <img
            className="float-left mb-2 md:mr-9 rounded-2xl  md:w-[400px] w-full md:h-[300px]"
            src={getAssetUrl("research/" + img + ".jpg")}
            alt=""
          />
          &ensp;&ensp;&ensp;&ensp;{t(text)}
        </div>
      </div>
    </div>
  );
}
