import { Link } from 'react-router-dom';
import FacebookIcon from '../../../public/f.svg?react';
import InstagramIcon from '../../../public/i.svg?react';
import FooterIcon from '../../../public/footer-logo.svg?react';
import { facebook, instagram } from '../../config.ts';

export const Footer = () => {
  const phone = '+31684683368';
  const email = 'stichtingnera@gmail.com';

  return (
    <footer className="gradient-border-top">
      <div className="container mx-auto max-w-[1202px] px-4 py-[2.875rem] md:pt-[5.625rem] md:pb-[27px]">
        <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-16">
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="inline-block transition-all duration-400 hover:opacity-[0.5]"
            >
              <FooterIcon />
            </Link>
          </div>
          <div className="w-full text-center md:max-w-[568px] md:text-left">
            <h3 className="font-playfair mb-[1.125rem] text-[32px] font-bold uppercase">
              Contacts
            </h3>
            <div className="text-base font-normal">
              <p className="mb-[0.563rem]">Stichting n’Era</p>
              <p className="mb-[0.563rem]">
                p/a Nassauplein 15, 2585EB, Den Haag, The Netherlands
              </p>
              <p className="mb-[0.563rem]">
                <a
                  className="transition-all duration-400 hover:opacity-[0.5]"
                  href={`tel:${phone}`}
                >
                  {phone}
                </a>
              </p>
              <p className="mb-[0.563rem]">
                <a
                  className="transition-all duration-400 hover:opacity-[0.5]"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              </p>
              <p className="mb-[1.438rem]">KVK-nummer 96354348</p>
            </div>

            <div className="flex justify-center gap-x-3.5 md:justify-start">
              <Link
                to={instagram}
                target="_blank"
                className="transition-all duration-400 hover:opacity-[0.7]"
              >
                <InstagramIcon className="h-[40px] w-[40px] md:h-auto md:w-auto" />
              </Link>
              <Link
                to={facebook}
                target="_blank"
                className="inline-block transition-all duration-400 hover:opacity-[0.7]"
              >
                <FacebookIcon className="h-[40px] w-[40px] md:h-auto md:w-auto" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-[31px]">
          <p className="font-work text-sm font-light">
            2025 &copy; n'Era Dance Productions. All Rights Reserved. Website by
          </p>
        </div>
      </div>
    </footer>
  );
};
