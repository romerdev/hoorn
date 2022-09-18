import Image from "next/future/image";

const Preview = ({ title, children, image, link, type }) => {
  return (
    <div className='bg-gray flex flex-col'>
      <Image
        src={"/" + image}
        width={"400"}
        height={"300"}
        className={"w-full"}
        alt={""}
      />
      <div className='px-6 pb-8 flex flex-col h-full relative'>
        <span className='absolute left-0 bg-gray text-sm text-red font-bold px-2 h-8 flex items-center -translate-y-8'>
          {type}
        </span>
        <h4 className='mt-4 mb-2 text-xl'>{title}</h4>
        <div className='mb-6'>{children}</div>
        <a href={link} className={"button mt-auto"}>
          Bekijk artikel
        </a>
      </div>
    </div>
  );
};

export default Preview;
