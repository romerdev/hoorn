import Layout from "../sections/Layout";
import QuickAction from "../components/QuickAction";
import Logo from "../public/logo-hoorn.svg";
import {
  CreditCardIcon,
  TruckIcon,
  BellIcon,
  CurrencyEuroIcon,
} from "@heroicons/react/24/outline";
import Image from "next/future/image";
import stationNoord from "../public/station-noord.webp";

export default function Home() {
  return (
    <Layout>
      <span className='bg-orange bg-blue bg-orange bg-purple bg-green bg-cyan'></span>
      <Hero />
      <Search />
      <Highlight />
    </Layout>
  );
}

const Hero = () => {
  return (
    <section className='text-center flex items-center flex-col bg-blue text-white pt-36 mb-28'>
      <Logo className='scale-150' />
      <h1 className='text-5xl mt-4'>Welkom in Hoorn</h1>
      <p className='mt-20 translate-y-6 font-bold tracking-wide'>
        Waarmee kunnen wij u helpen?
      </p>
      <div className='wrapper'>
        <nav className='grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6'>
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
    <div className='wrapper--small text-center mb-32'>
      <p className='mb-4 font-bold max-w-sm mx-auto'>
        Nog niet gevonden wat u zocht? Dan kunt u hieronder verder zoeken.
      </p>
      <form className='flex '>
        <input
          type='text'
          placeholder='Vul hier uw zoekterm in'
          name='search'
          className='border-2 border-red text-red font-bold px-4 py-2 w-full'
        />
        <button
          type='submit'
          className='bg-red text-white p-4 aspect-square font-bold hover:underline underline-offset-2'
        >
          Zoek
        </button>
      </form>
    </div>
  );
};

const Highlight = () => {
  return (
    <div className='wrapper mb-32'>
      <div className='md:grid md:grid-cols-2 md:gap-6'>
        <Image
          src={stationNoord}
          className={"h-full object-cover"}
          alt={"Concept van de noord-kant van Stationsgebied Hoorn."}
        />
        <div className='mt-8 md:mt-0 md:py-4'>
          <h2 className='text-3xl md:text-4xl md:max-w-sm mb-2'>
            Maak plaats in de Poort van Hoorn
          </h2>
          <p className='mb-4 opacity-50 md:max-w-md font-bold'>
            De toekomst van het stationsgebied van Hoorn.
          </p>
          <p className='md:max-w-md'>
            Hoorn neemt een ambitieuse sprong voorwaarts. De komende jaren gaat
            het stationsgebied en Pelmolenpad flink veranderen. Juist in dit
            gebied is er veel ruimte voor nieuwe ontwikkelingen. Nieuwe en
            aantrekkelijke stedelijke woon-werkmilieus, op steenworp afstand van
            de prachtige historische binnenstad én het grootste stadsstrand van
            Nederland.
          </p>
          <div className='flex gap-x-4 mt-8'>
            <a
              href='https://www.poortvanhoorn.nl/'
              target={"_blank"}
              rel={"noreferrer"}
              className='button'
            >
              Lees meer
            </a>
            <a href='https://www.poortvanhoorn.nl/' className='button--outline'>
              Meer projecten
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
