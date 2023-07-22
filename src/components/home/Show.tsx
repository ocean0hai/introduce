import Img from "./Img";
import Displaylink from "./Displaylink";
import { useTranslation } from "react-i18next";
const data1 = {
  text: " Rear projection removes traditional mechanics from the equation. \
        Choose from a variety of different faces and appearances. \
        Update and adapt with the push of a button. IP protection – US Patent 9,810,975",
  img: "../../../public/other/team.jpg",
};
const data2 = {
  text: " Rear projection removes traditional mechanics from the equation. \
        Choose from a variety of different faces and appearances. \
        Update and adapt with the push of a button. IP protection – US Patent 9,810,975",
  img: "../../../public/other/activity.jpg",
};

export default function Show() {
  const { t } = useTranslation();
  return (
    <div className="mt-5  flow-root">
      <div className="mt-10">
        <h1 className="text-[80px]">认识我们</h1>
      </div>
      <div className="  h-[500px] flex mx-auto bg-white my-20">
        <div className=" w-1/2 h-full ">
          <Img imgsrc={data1.img} />
        </div>
        <div className="w-1/2 h-full">
          <Displaylink
            title={t("team")}
            text={data1.text}
            goPage={"/index/team"}
          />
        </div>
      </div>
      <div className="  h-[500px] flex mx-auto bg-white my-20">
        <div className=" w-1/2 h-full ">
          <Displaylink
            title={t("activity")}
            text={data2.text}
            goPage={"/index/activity"}
          />
        </div>
        <div className="w-1/2 h-full">
          <Img imgsrc={data2.img} />
        </div>
      </div>
    </div>
  );
}
