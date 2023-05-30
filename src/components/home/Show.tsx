import Img from "./Img"
import Displaylink from "./Displaylink" 

const data1={
    title:'活动',
    text:' Rear projection removes traditional mechanics from the equation. \
        Choose from a variety of different faces and appearances. \
        Update and adapt with the push of a button. IP protection – US Patent 9,810,975',
    img:'../../../public/123.jpg',
    path:'team'
  }

export default function Show() {

  return (
    <div className='mt-5 w-[1400px] mx-auto flow-root'>
      <div className="">
        <h1 className="text-[80px]">认识我们</h1>
      </div>
      <div className=' w-[1400px] h-[500px] flex mx-auto bg-white my-20'>
        <div className=" w-1/2 h-full ">
          <Img imgsrc={data1.img} />
        </div>
        <div className="w-1/2 h-full">
          <Displaylink title={'团队'} text={data1.text}  goPage={'/index/team'}/>
        </div>
      </div> 
      <div className=' w-[1400px] h-[500px] flex mx-auto bg-white my-20'>
        <div className=" w-1/2 h-full ">
          <Displaylink title={'活动'} text={data1.text} goPage={'/index/activity'} />
        </div>
        <div className="w-1/2 h-full">
          <Img imgsrc={data1.img}/>
        </div>
      </div>
    </div>
  )
}
