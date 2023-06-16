import useGetTable from "@/hooks/useGetTable"
export default function Team() {
  const {data}=useGetTable('team')
  console.log(data);
  
  return (
    <div className="w-[1400px] mx-auto">
      {/*老师 */}
      <div className="my-5">
        <div className='py-4 bg-cyan-200 text-[40px]'>指导老师</div>
        <div className='flex flex-wrap'>
          {
            data.map((item,index)=>{
              return item.identity === '老师' ?(
                <div className='w-56 h-[350px] mx-1 my-3 rounded-2xl shadow-xl' key={index}>
                  <img className='w-56 h-72' src={item.imgsrc1} alt="" />
                  <div className='text-3xl mt-3 text-center'>{item.name}</div>
                </div>  
              ):''
             })    
          }
        </div>
      </div>
      {/* 学生 */}
      <div>
        <div className='py-4 bg-cyan-200 text-[40px]'>成员</div>
        <div className="flex flex-wrap">
          {
            data.map((item,index)=>{
              return item.identity === '学生' ?(
                <div className='w-56 h-[350px] mx-1 my-3 rounded-2xl shadow-xl' key={index}>
                  <img className='w-56 h-72' src={item.imgsrc1} alt="" />
                  <div className='text-3xl mt-3 text-center'>{item.name}</div>
                </div>  
              ):''
             })    
          }
        </div>
      </div>
    </div>
  )
}
