import HonorBlock from "@/components/honor/HonorBlock"
const honorData=[
  {
    year:'2023',
    imgData:[
      {
        createTime:'232233',
        name:'fasfdfas',
        imgSrc:'../../public/123.jpg'
      },
      {
        createTime:'232233',
        name:'fasfdfas',
        imgSrc:'../../public/123.jpg'
      }
    ]
  },
  {
    year:'2024',
    imgData:[
      {
        createTime:'23235234',
        name:'fasfdfas',
        imgSrc:'../../public/123.jpg'
      }
    ]
  }

]
export default function Honor() {

  return (
    <div className="w-[1400px] mx-auto">
      <div className="w-full bg-cyan-50">
        <h1 className="py-10 text-center ml-10 text-[40px]">荣誉</h1>
      </div>
      {
        honorData.map((item,index)=>{
          return  <HonorBlock key={index} {...item}/> 
        })
      }
    </div>
  )
}
