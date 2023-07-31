import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";

const menu = [
  {
    name: "简介",
    to: "competition",
  },
  {
    name: "团队",
    to: "team",
  },
];

export default function Laboratory() {
  const local = useLocation();
    const { t } = useTranslation();
  const bg= local.pathname.split('/')[3]
  return (
    <>
      <div className="grid grid-cols-2">
        {menu.map((item) => {
          return (
            <Link
              key={item.to} 
              style={{
                background:
                  bg ===  item.to
                    ? "rgb(226 232 240)"
                    : "",
              }}
            
              className="text-center text-2xl md:py-3 md:text-3xl"
              to={"/index/laboratory/" + item.to}
            >
              {t(item.to)}
            </Link>
          );
        })}
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
}
