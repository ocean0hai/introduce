interface propsType {
  name: string;
  img: string;
  text: string;
}
export default function ProjectItem(data: propsType) {
  const { name, img, text } = data;
  return (
    <div className="w-full overflow-hidden">
      <div className=" mt-3">
        <div className="text-center text-[2rem] py-2 font-bold">{name}</div>
        <div className="w-full">
          <img
            className=" float-left mr-9 rounded-2xl  md:w-[400px] w-full md:h-[300px]"
            src={"../../public/research/" + img + ".jpg"}
            alt=""
          />
          {text}
        </div>
      </div>
    </div>
  );
}
