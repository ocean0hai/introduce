
interface propsType{
  time:string,
  name:string,
  img:string
}
export default function HonorItem({time,name,img}:propsType) {
  return (
    <div className="w-full px-3 my-3">
      <div>
        <h2>比赛:<span className="font-bold">{name}</span></h2>
        <h2>时间:{time}</h2>
      </div>
      <div className="w-full">
        <img className="w-full" src={'../../../public/honor/'+img+'.jpg'} alt="" />
      </div>
    </div>
  )
}
