import { useTranslation } from "react-i18next";
const activityArr: Array<any> = ["1", "1", "1", "1", "1", "1"];
export default function Activity() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="text-[40px] bg-cyan-100 p-10">{t("titleactivity")}</div>
      <div className="grid grid-cols-3 gap-8">
        {activityArr.map((item, i) => {
          return (
            <div className=" mt-4 drop-shadow-xl" key={i}>
              <img
                className="w-full rounded-xl"
                src={"../../public/activity/" + item + ".jpg"}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
