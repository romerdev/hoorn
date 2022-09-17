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
      <span className='bg-orange bg-blue bg-orange bg-yellow bg-purple bg-green'></span>
      <Hero />
    </Layout>
  );
}

const Hero = () => {
  return (
    <section className='text-center flex items-center flex-col bg-red text-white pt-32'>
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
            color='blue'
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
