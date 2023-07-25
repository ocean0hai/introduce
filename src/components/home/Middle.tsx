import MiddleItem from "./MiddleItem";
const data = [
  {
    path: "/index/research",
    title: "research",
    iconstr: "game-icons:archive-research",
    text: "Rear projection removes traditional mechanics from the equation.\
Choose from a variety of different faces and appearances. \
Update and adapt with the push of a button. IP protection – US Patent 9,810,975",
  },
  {
    path: "/index/competition",
    title: "competition",
    iconstr: "material-symbols:all-match-sharp",
    text: "Rear projection removes traditional mechanics from the equation.\
Choose from a variety of different faces and appearances. \
Update and adapt with the push of a button. IP protection – US Patent 9,810,975",
  },
  {
    path: "/index/honor",
    title: "honor",
    iconstr: "mdi:trophy",
    text: "Rear projection removes traditional mechanics from the equation.\
Choose from a variety of different faces and appearances. \
Update and adapt with the push of a button. IP protection – US Patent 9,810,975",
  },
];

export default function Middle() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-3  justify-items-center">
      {data.map((item, index) => {
        return <MiddleItem key={index} {...item} />;
      })}
    </div>
  );
}
