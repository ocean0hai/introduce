interface propsType{
  name:string,
  imgsrc1:string,
  text:string
}
export default function ProjectItem({
 name,
 imgsrc1,
 text
}:propsType) {
  return (
    <div className='w-full overflow-hidden'>
      <div className='text-3xl mt-3'>
        <h3 className='text-center font-bold'>{name}</h3>
        <div className='w-full'>
          <img className=' float-left mr-9 mb-3 rounded-2xl w-[400px] h-[300px]' src={imgsrc1}alt="" />
          
            浮动float,会导致子盒子脱离文档流，从而不会影响父盒子的实际高度，因此当
            前父盒子高度为0。因为父盒子下面的盒子的实际位置
            受当前父盒子位置的影响，但现在这个父盒子高度为0，即不占位置，那么下面再放盒子就会无视它喽
          
        </div>
      </div>
    </div>
  )
}
