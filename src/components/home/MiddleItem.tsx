import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
interface propsType {
  iconstr: string;
  title: string;
  text: string;
  path: string;
}
export default function MiddleItem({ iconstr, title, text, path }: propsType) {
  const { t } = useTranslation();
  const nacigate = useNavigate();
  return (
    <>
      <div className="h-full w-auto mt-2 border-4 shadow-2xl mx-2  rounded-3xl">
        <div className="md:h-5/6">
          <div className="w-[5rem] md:w-[10rem] mx-auto">
            <Icon className="w-full h-full" icon={iconstr} />
          </div>
          <div className="text-[1rem] md:text-[4rem] text-center">
            {t(title)}
          </div>
          <div className="mx-7  md:text-3xl md:leading-normal flex-initial">
            &emsp;&emsp;{t(text)}
          </div>
        </div>
        <div className="text-center mt-2 mb-3">
          <button
            onClick={() => nacigate(path)}
            className="text-sm md:text-lg border-0 p-5 md:px-8 rounded-full shadow-lg"
          >
            {t("readmore")}
          </button>
        </div>
      </div>
    </>
  );
}
