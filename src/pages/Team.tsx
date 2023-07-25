import TeamItem from "@/components/TeamItem";
import { useTranslation } from "react-i18next";
const tearch = [
  {
    name: "老师1",
    img: "蜘蛛侠",
  },
  {
    name: "老师2",
    img: "蜘蛛侠",
  },
];
const student: Array<any> = [
  {
    name: "曹诗婧",
    img: "曹诗婧",
  },
  {
    name: "程琪",
    img: "程琪",
  },
  {
    name: "丁艳秋",
    img: "丁艳秋",
  },
  {
    name: "范祝杰",
    img: "范祝杰",
  },
  {
    name: "金涛",
    img: "金涛",
  },
  {
    name: "申澳伟",
    img: "申澳伟",
  },
  {
    name: "宋亚静",
    img: "宋亚静",
  },
  {
    name: "王涵菁",
    img: "王涵菁",
  },
  {
    name: "韦柯平",
    img: "韦柯平",
  },
  {
    name: "薛世超",
    img: "薛世超",
  },
  {
    name: "杨钦",
    img: "杨钦",
  },
  {
    name: "张方娴",
    img: "张方娴",
  },
  {
    name: "章心如",
    img: "章心如",
  },
];

export default function Team() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="text-[3rem] font-black text-center">我们团队</div>
      {/*老师 */}
      {tearch.length === 0 ? (
        <TeamItem title={t("instructor")} data={tearch}></TeamItem>
      ) : null}
      {/* 学生 */}
      <TeamItem title={t("member")} data={student}></TeamItem>
    </div>
  );
}
