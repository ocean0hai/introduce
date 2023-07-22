import { useTranslation } from "react-i18next";
interface propsType {
  data: Array<any>;
}
export default function TeamItem({ data }: propsType) {
  const { t } = useTranslation();
  console.log(data);

  return (
    <div>
      <div className="my-5">
        <div className="py-4 bg-cyan-200 text-[40px] pl-10">
          {t("instructor")}
        </div>
        <div className="flex flex-wrap">
          {data.map((item, index) => {
            return (
              <div
                className="w-56 h-[350px] mx-1 my-3 rounded-2xl shadow-xl"
                key={index}
              >
                {item.imgsrc}
                <img className="w-56 h-72" src={'../../public/team/'+item.img+".jpg"} alt="" />
                <div className="text-3xl mt-3 text-center">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
