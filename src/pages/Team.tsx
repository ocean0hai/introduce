import TeamItem from "@/components/TeamItem";
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
const student:Array<any>= [];
for (let i = 0; i < 10; i++) {
  student.push({
    name: `学生${i}`,
    img: "蜘蛛侠",
  });
}
export default function Team() {
  return (
    <div>
      {/*老师 */}
      <TeamItem data={tearch}></TeamItem>
      {/* 学生 */}
      <TeamItem data={student}></TeamItem>
    </div>
  );
}
