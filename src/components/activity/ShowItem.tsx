interface propsType {
  name: string;
  time: string;
  imgsrc1: string;
  imgsrc2: string;
  imgsrc3: string;
}
export default function ShowItem({
  name,
  time,
  imgsrc1,
  imgsrc2,
  imgsrc3,
}: propsType) {
  return (
    <div className="flow-root bg-gray-200 my-3">
      <div className=" md:text-3xl md:ml-20 md:mt-10">
        <span>{name}</span>
        <span>{time}</span>
      </div>

      <div className=" grid  gap-4 grid-cols-3 mb-7">
        <div >
          <img
            className="w-full"
            src={"../../../public/activity/" + imgsrc1 + ".jpg"}
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-full"
            src={"../../../public/activity/" + imgsrc2 + ".jpg"}
            alt=""
          />
        </div>
        <div className="">
          <img
            className="w-full"
            src={"../../../public/activity/" + imgsrc3 + ".jpg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
