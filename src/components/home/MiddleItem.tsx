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
      <div className="mt-2 border-4 shadow-2xl mx-2  rounded-3xl">
        <div className="w-[5rem] md:w-[10rem] mx-auto">
          <Icon className="w-full h-full" icon={iconstr} />
        </div>
        <div className="text-[1rem] md:text-[4rem] text-center">{t(title)}</div>
        <div className="mx-7 md:text-lg ">{text}</div>
        <div className=" text-center  mt-10 mb-5">
          <button
            onClick={() => nacigate(path)}
            className="text-sm md:text-lg border-0 p-4 rounded-full"
          >
            {t("readmore")}
          </button>
        </div>
      </div>
    </>
  );
}
