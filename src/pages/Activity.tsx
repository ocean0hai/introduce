import ShowItem from "@/components/activity/ShowItem";
import { useTranslation } from "react-i18next";
const activityArr: Array<any> = [];
for (let i = 0; i < 4; i++) {
  activityArr.push({
    name: `${i}`,
    time: `2320-2-3`,
    imgsrc1: "1",
    imgsrc2: "1",
    imgsrc3: "1",
  });
}
export default function Activity() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-[40px] bg-cyan-300 p-10">{t("titleactivity")}</div>
      {activityArr.map((item, index) => {
        return <ShowItem key={index} {...item} />;
      })}
    </div>
  );
}
