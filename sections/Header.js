import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Logo from "../public/logo-weapon.svg";

const Header = () => {
  return (
    <header className='fixed bg-white top-0 left-0 w-full flex justify-center z-20 shadow-lg'>
      <div className='wrapper flex justify-between'>
        <div className='flex'>
          <div className='bg-red -mb-6 flex items-center shadow-lg'>
            <Logo />
          </div>
          <div className='hidden sm:block my-auto ml-4 font-bold'>
            Gemeente Hoorn
          </div>
        </div>
        <div className='flex gap-x-3 py-3'>
          <button className='button--outline--red'>
            Zoeken <MagnifyingGlassIcon className='h-5 w-5' />
          </button>
          <button className='button--red'>Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
