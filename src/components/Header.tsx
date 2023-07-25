import { Icon } from "@iconify/react";
import { Select } from "antd";
import "@/assets/menu.css";
import i18n from "i18next";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
const data = [
  {
    key: "home",
    icon: "ion:home",
    label: "主页",
  },
  {
    key: "research",
    icon: "academicons:researcherid",
    label: "研究",
  },
  {
    key: "competition",
    icon: "material-symbols:all-match-outline-sharp",
    label: "竞赛",
  },
  {
    key: "honor",
    icon: "bxs:trophy",
    label: "荣誉",
  },
  {
    key: "team",
    icon: "arcticons:team-fight-tactics",
    label: "团队",
  },
  {
    key: "activity",
    icon: "carbon:user-activity",
    label: "活动",
  },
];

export default function Header() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const [lang, setLang] = useState("zh");

  function handleChange(value: string) {
    setLang(value);
    i18n.changeLanguage(value);
    localStorage.setItem("language", value);
  }
  useEffect(() => {
    setLang(localStorage.getItem("language") || "zh");
  }, []);

  return (
    <div className="lg:py-8 flex justify-around mt-3 ">
      <div className="flex h-full w-[16rem]  pl-2 items-center">
        <Icon className="w-[2rem] md:w-1/3 h-full" icon="bxs:low-vision" />
        <div className="text-[1rem] md:text-[2rem]">{t("title")}</div>
      </div>
      <div className="h-full">
        <Select
          className="w-full"
          value={lang}
          onChange={handleChange}
          options={[
            { value: "zh", label: "中文" },
            { value: "en", label: "英文" },
          ]}
        ></Select>
      </div>
      <div className="menu1 justify-between">
        {data.map((item) => {
          return (
            <Link
              to={item.key}
              key={item.key}
              className="flex px-3  my-2 items-center no-underline rounded-2xl hover:bg-gray-100"
              style={{
                background:
                  location.pathname === "/index/" + item.key
                    ? "rgb(226 232 240)"
                    : "",
              }}
            >
              <Icon className="h-full w-10" icon={item.icon} />
              <span className="text-[2rem]">{t(item.key)}</span>
            </Link>
          );
        })}
      </div>
      <div onClick={() => setShow(!show)} className="menu2 w-[6rem] md:w-[10rem]">
        {!show ? (
          <Icon className="w-full h-[2rem] md:h-[4rem] " icon="octicon:three-bars-16" />
        ) : (
          <Icon className="w-full h-[2rem]] md:h-[4rem]" icon="icon-park-outline:error" />
        )}
      </div>
      {show ? (
        <div className="absolute top-10 md:top-20 z-50 w-full bg-gray-100">
          {data.map((item) => {
            return (
              <Link
                to={item.key}
                key={item.key}
                className="flex w-full my-2 items-center no-underline rounded-2xl hover:bg-gray-100"
                style={{
                  background:
                    location.pathname === "/index/" + item.key
                      ? "rgb(226 232 240)"
                      : "",
                }}
              >
                <Icon className="h-full md:w-10" icon={item.icon} />
                <span className=" md:text-[25px]">{t(item.key)}</span>
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
