import MiddleItem from "./MiddleItem";

const data = [
  {
    path: "/index/research",
    title: "research",
    iconstr: "game-icons:archive-research",
    text: "homeresearch",
  },
  {
    path: "/index/competition",
    title: "activity",
    iconstr: "material-symbols:all-match-sharp",
    text: "homeactivity",
  },
  // {
  //   path: "/index/honor",
  //   title: "honor",
  //   iconstr: "mdi:trophy",
  //   text: "homehonor",
  // },
];

export default function Middle() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2  justify-items-center">
      {data.map((item, index) => {
        return <MiddleItem key={index} {...item} />;
      })}
    </div>
  );
}
