import ProjectItem from "@/components/research/ProjectItem";
const data:Array<any> = [];
for (let i = 1; i < 4; i++) {
  data.push({
    name:`researchtitle${i}`,
    text: `research${i}` ,
     img:`img${i}` 
  },) 
}
export default function Research() {
  return (
    <div>
      {data.map((item,index) => {
        return <ProjectItem key={index} {...item} />;
      })}
    </div>
  );
}
