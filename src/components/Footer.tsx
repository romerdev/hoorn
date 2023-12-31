import Logo from "../../public/logo-full.svg";
import Facebook from "../../public/icons/facebook.svg";
import Instagram from "../../public/icons/instagram.svg";
import YouTube from "../../public/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-gray pt-10 md:pt-16">
      <div className="wrapper grid lg:grid-cols-4 gap-12 lg:gap-24">
        <div>
          <Logo className="max-h-20 mx-auto" />
        </div>
        <div className="grid gap-12 md:grid-cols-3 lg:col-span-3 lg:gap-24 lg:grid-flow-dense">
          <div className="grid grid-cols-2 gap-12 md:gap-24 md:col-span-2 lg:col-start-2">
            <ul className="flex flex-col gap-y-2">
              <li>
                <a className="link">Vacatures</a>
              </li>
              <li>
                <a className="link">Openingstijden</a>
              </li>
              <li>
                <a className="link">Over deze website</a>
              </li>
              <li>
                <a className="link">Afspraak maken</a>
              </li>
            </ul>
            <div>
              <strong>Bezoekadres:</strong>
              <p className="mb-4">
                Nieuwe Steen 1 <br />
                1625HV, Hoorn
              </p>
              <strong>Postadres:</strong>
              <p>
                Postbos 603 <br />
                1620 AR, Hoorn
              </p>
            </div>
          </div>
          <div className="lg:col-span-1 lg:col-start-1">
            <a className="button button--full mb-2">Bestuur bekijken</a>
            <a className="button--outline button--full">Contact opnemen</a>
          </div>
        </div>
      </div>

      <div className="bg-red py-4 text-white mt-16">
        <div className="wrapper flex justify-center gap-x-12 lg:justify-between">
          <a className="md:flex items-center gap-x-2 group">
            <Facebook className="h-5" />
            <p className="hidden lg:block">
              /{" "}
              <span className="group-hover:underline underline-offset-2">
                GemeenteHoorn
              </span>
            </p>
          </a>
          <a className="md:flex items-center gap-x-2 group">
            <Instagram className="h-5" />
            <p className="hidden lg:block">
              /{" "}
              <span className="group-hover:underline underline-offset-2">
                GemeenteHoorn
              </span>
            </p>
          </a>
          <a className="md:flex items-center gap-x-2 group">
            <YouTube className="h-5" />
            <p className="hidden lg:block">
              /{" "}
              <span className="group-hover:underline underline-offset-2">
                GemeenteHoorn
              </span>
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
