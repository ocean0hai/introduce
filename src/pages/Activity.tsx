import ShowItem from '@/components/activity/ShowItem'
import useGetTable from '@/hooks/useGetTable'

export default function Activity() {
  const {data}=useGetTable('activity')
  console.log(data);
  
  return (
    <div className='w-[1400px] mx-auto'>
      <div>
        <div className='text-[40px] bg-cyan-300 p-10'>丰富多彩的活动</div>
        {
          data.map((item,index)=>{
            return(
             <ShowItem key={index} {...item} />
            )
          })
        }
      </div>
       
    </div>
  )
}
