import { useTranslation } from "react-i18next";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
interface propsType {
  text: string;
  goPage: string;
}
export default function Displaylink({ text, goPage }: propsType) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="ml-3">
      {/* <div className=' font-semibold md:text-[50px] ml-3 my-4'>{title}</div>  */}
      <div className="md:mt-9 md:text-[30px] mx-3 md:leading-normal">
        {" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t(text)}
      </div>
      <div className="w-full text-center my-4 md:mt-10">
        <Button onClick={() => navigate(goPage)}>{t("readmore")}</Button>
      </div>
    </div>
  );
}
