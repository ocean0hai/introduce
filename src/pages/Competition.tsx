import { useTranslation } from "react-i18next";
const competeArr: Array<any> = [];
for (let i = 0; i < 3; i++) {
  competeArr.push({
    name: `${i}`,
    text: `${i}`,
    link: `${i}`,
    imgsrc1: "1",
  });
}
export default function Competition() {
  const { t } = useTranslation();
  return (
    <>
      <div className="">
        <div className="text-center font-bold md:text-[50px] py-3 md:py-5">
          {t("laboratory")}
        </div>
      </div>
      <div className="my-3 w-auto mx-3">
        <span className="text-[1.2rem] md:text-[2rem] leading-tight md:leading-loose">
          &emsp;&emsp;
          {t("laboratory_text1")}
          <br />
          &emsp;&emsp;
          {t("laboratory_text2")}
          <br />
          &emsp;&emsp;
          {t("laboratory_text3")}
        </span>
      </div>
    </>
  );
}
