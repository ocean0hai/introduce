
export default function Team() {
  const data=[]
  for (let i = 0; i < 10; i++) {
    data.push({
      img:'../../public/xiao.jpg',
      text:'fasdf'
    }) 
  }
  return (
    <div className="w-[1400px] mx-auto">
      {/*老师 */}
      <div className="my-5">
        <div className='py-4 bg-cyan-200 text-[40px]'>指导老师</div>
        <div className='flex flex-wrap'>
          {
             data.map((item,index)=>{
              return (
                <div className='w-56 h-[350px] mx-1 my-3 rounded-2xl bg-red-100' key={index}>
                  <img className='w-56 h-72' src={item.img} alt="" />
                  <div className='text-3xl mt-3 text-center'>{item.text}</div>
                </div>  
              )
             })     
          }
        </div>
      </div>
      {/* 学生 */}
      <div>
        <div className='py-4 bg-cyan-200 text-[40px]'>成员</div>
      </div>
    </div>
  )
}
