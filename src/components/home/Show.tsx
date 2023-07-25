import Displaylink from "./Displaylink";
import { useTranslation } from "react-i18next";
const data1 = {
  text: " Rear projection removes traditional mechanics from the equation. \
        Choose from a variety of different faces and appearances. \
        Update and adapt with the push of a button. IP protection – US Patent 9,810,975",
  img: "team",
};
const data2 = {
  text: " Rear projection removes traditional mechanics from the equation. \
        Choose from a variety of different faces and appearances. \
        Update and adapt with the push of a button. IP protection – US Patent 9,810,975",
  img: "activity",
};

export default function Show() {
  const { t } = useTranslation();
  return (
    <div className="mt-5  flow-root">
      <div className="mt-10">
        <h1 className="text-[80px]">认识我们</h1>
      </div>
      <div className="drop-shadow-lg grid grid-cols-1 md:grid-cols-2 mx-auto bg-white my-20">
        <div className="">
          <img
            className="w-full h-full"
            src={"../../../public/other/" + data1.img + ".jpg"}
            alt=""
          />
        </div>
        <div className="h-full">
          <Displaylink
            title={t("team")}
            text={data1.text}
            goPage={"/index/team"}
          />
        </div>
      </div>
      <div className="drop-shadow-lg grid grid-cols-1 md:grid-cols-2   mx-auto bg-white my-20">
        <div className="">
          <img
            className="w-full h-full"
            src={"../../../public/other/" + data1.img + ".jpg"}
            alt=""
          />
        </div>
        <div className="">
          <Displaylink
            title={t("activity")}
            text={data2.text}
            goPage={"/index/activity"}
          />
        </div>
      </div>
    </div>
  );
}
