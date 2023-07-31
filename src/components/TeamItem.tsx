interface propsType {
  data: Array<any>;
  title:string
}
export default function TeamItem({ data,title }: propsType) {
  return (
    <div>
      <div className="my-5">
        <div className=" font-bold py-4 md:text-[40px] pl-10">
          {title}
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 px-3 justify-items-center gap-5">
          {data.map((item, index) => {
            return (
              <div
                className="w-[6rem] sm:w-[10rem]  xl:w-[12rem] mx-1 my-1 px-2 pt-1 rounded-xl shadow-xl"
                key={index}
              >
                {item.imgsrc}
                <img className=" w-full h-[6rem] sm:h-[10rem] xl:h-[13rem]" src={'../../public/team/'+item.img+".jpg"} alt="" />
                <div className=" py-2 text-center sm:text-[1.5rem] xl:text-[2rem]">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
