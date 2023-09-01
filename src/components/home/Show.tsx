import Displaylink from "./Displaylink";
import { useTranslation } from "react-i18next";
import Teamimg from "@/assets/other/team.jpg";
const data1 = {
  text: "laboratorytext",
  img: "team",
};
export default function Show() {
  const { t } = useTranslation();
  return (
    <div className="mt-5 flow-root">
      <div className="md:mt-10">
        <h1 className="text-3xl font-bold md:text-[80px]">{t("about")}</h1>
      </div>
      <div className="drop-shadow-lg grid grid-cols-1 md:grid-cols-2 mx-auto bg-white md:my-20">
        <div className="">
          <img className="w-full h-full" src={Teamimg} alt="" />
        </div>
        <div className="h-full">
          <Displaylink
            text={data1.text}
            goPage={"/index/laboratory/competition"}
          />
        </div>
      </div>
    </div>
  );
}
