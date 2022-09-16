import { ChevronRightIcon } from "@heroicons/react/24/solid";

const QuickAction = ({ action, children, color }) => {
  return (
    <div className='bg-white text-black flex flex-col items-center translate-y-14 h-full'>
      <div className='m-7 flex flex-col items-center h-full'>
        <p className='font-bold'>{action}</p>
        <div className='mt-auto p'>{children}</div>
      </div>
      <div
        className={
          "p-4 text-white w-full flex justify-center items-center group cursor-pointer hover:underline underline-offset-2 bg-" +
          color
        }
      >
        Bekijk{" "}
        <ChevronRightIcon className='h-5 w-5 ml-1 transition-transform group-hover:translate-x-1' />
      </div>
    </div>
  );
};

export default QuickAction;
