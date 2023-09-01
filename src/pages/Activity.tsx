import Preview from "@/components/activity/Preview";
import { useTranslation } from "react-i18next";
const activityArr: Array<string> = [
  "碑刻博物馆_2",
  "碑刻博物馆",
  "融合教育",
  "学生进校园",
  "智博会",
];
export default function Activity() {
  const { t } = useTranslation();
  return (
    <>
      <div className=" text-center py-3 md:text-[40px] bg-cyan-100 md:p-10">
        {t("titleactivity")}
      </div>
      <div className="grid grid-cols-3 gap-2 md:gap-8">
        {activityArr.map((item, i) => {
          return (
            <div className=" mt-4 md:h-[16rem] drop-shadow-xl" key={i}>
              <Preview img={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}
