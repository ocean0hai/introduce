interface propsType {
  name: string;
  text: string;
  link: string;
  imgsrc1: string;
}

export default function CompetitionItem({
  name,
  text,
  link,
  imgsrc1,
}: propsType) {
  return (
    <div className="w-full border-2 border-red-700 border-solid shadow-xl my-8 overflow-hidden">
      <h1 className="text-[40px] mt-4 font-bold text-center">{name}</h1>
      <div className="my-5 mx-9">
        <img
          className="md:w-[400px] w-full float-left h-[300px] rounded-2xl mr-8 mb-5"
          src={'../../../public/competition/'+imgsrc1+'.jpg'}
          alt=""
        />
        <p className="text-[30px] mr-4">&nbsp; &nbsp; &nbsp;{text}</p>
      </div>
      <div className="my-6 text-3xl">
        &nbsp; &nbsp; &nbsp; &nbsp; 官网链接：
        <a className="no-underline" href={link}>
          {link}
        </a>
      </div>
    </div>
  );
}
