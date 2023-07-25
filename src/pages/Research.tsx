import ProjectItem from "@/components/research/ProjectItem";
const data:Array<any> = [];
for (let i = 0; i < 3; i++) {
  data.push({
    name:`${i}`,
    text: `浮动float,会导致子盒子脱离文档流，从而不会影响父盒子的实际高度，因此当
            前父盒子高度为0。因为父盒子下面的盒子的实际位置
            受当前父盒子位置的影响，但现在这个父盒子高度为0，即不占位置，那么下面再放盒子就会无视它喽
`,
  img:'1' 
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
