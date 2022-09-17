import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Logo from "../public/logo-hoorn.svg";

const Header = () => {
  return (
    <header className='fixed bg-white top-0 left-0 w-full flex justify-center z-20'>
      <div className='wrapper flex justify-between'>
        <div className='bg-blue -mb-6 flex items-center'>
          <Logo />
        </div>
        <div className='flex gap-x-3 py-3'>
          <button className='border-2 border-blue text-blue font-bold px-4 py-2 flex gap-x-2 items-center'>
            Zoeken <MagnifyingGlassIcon className='h-5 w-5' />
          </button>
          <button className='bg-blue font-bold text-white px-4 py-2'>
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
