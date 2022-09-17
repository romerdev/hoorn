import Layout from "../sections/Layout";
import QuickAction from "../components/QuickAction";
import Logo from "../public/logo-weapon.svg";
import {
  CreditCardIcon,
  TruckIcon,
  BellIcon,
  CurrencyEuroIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <Layout>
      <span className='bg-orange bg-blue bg-orange bg-yellow bg-purple bg-green bg-cyan'></span>
      <Hero />
      <Search />
    </Layout>
  );
}

const Hero = () => {
  return (
    <section className='text-center flex items-center flex-col bg-red text-white pt-36 mb-28'>
      <Logo className='scale-150' />
      <h1 className='text-5xl mt-4'>Welkom in Hoorn</h1>
      <p className='mt-20'>Waarmee kunnen wij u helpen?</p>
      <div className='wrapper'>
        <nav className='grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-7'>
          <QuickAction action='Ik wil een rijbewijs aanvragen' color='green'>
            <CreditCardIcon className='h-7 w-7' />
          </QuickAction>
          <QuickAction action='Ik wil een verhuizing doorgeven' color='orange'>
            <TruckIcon className='h-7 w-7' />
          </QuickAction>
          <QuickAction
            action='Ik wil overlast of iets dat kapot is melden'
            color='cyan'
          >
            <BellIcon className='h-7 w-7' />
          </QuickAction>
          <QuickAction
            action='Ik wil meer weten over belastingen'
            color='purple'
          >
            <CurrencyEuroIcon className='h-7 w-7' />
          </QuickAction>
        </nav>
      </div>
    </section>
  );
};

const Search = () => {
  return (
    <div className='wrapper--small text-center'>
      <p className='mb-4 font-bold max-w-sm mx-auto'>
        Nog niet gevonden wat u zocht? Dan kunt u hieronder verder zoeken.
      </p>
      <form className='flex '>
        <input
          type='text'
          placeholder='Vul hier uw zoekterm in'
          name='search'
          className='border-2 border-blue text-blue font-bold px-4 py-2 w-full'
        />
        <button type='submit' className='bg-blue text-white p-4 aspect-square'>
          Zoek
        </button>
      </form>
    </div>
  );
};
