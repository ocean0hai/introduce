interface propsType {
  name: string;
  img: string;
  text: string;
}
export default function ProjectItem(data: propsType) {
  const { name, img, text } = data;
  return (
    <div className="w-full overflow-hidden">
      <div className="text-3xl mt-3">
        <h3 className="text-center font-bold">{name}</h3>
        <div className="w-full">
          <img
            className=" float-left mr-9 mb-3 rounded-2xl w-[400px] h-[300px]"
            src={img}
            alt=""
          />
          {text}
        </div>
      </div>
    </div>
  );
}
