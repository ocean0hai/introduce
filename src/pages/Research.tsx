import ProjectItem from "@/components/research/ProjectItem";
import useGetTable from "@/hooks/useGetTable"
export default function Research() {
  const {data}=useGetTable('research')
  console.log(data);
  
  return (
    <div className='w-[1400px] mx-auto'>
      {
        data.map(item=>{
          return(
            <ProjectItem key={item.id} {...item} />
          )
        })
      }
    </div>
  )
}
