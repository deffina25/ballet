import RightIcon from '../../../public/right.svg?react';
//TODO
export const About = () => {
  return (
    <section className="relative mx-auto h-full max-w-[90rem] xl:min-h-[904px]">
      <section className="container mx-auto grid max-w-[75.125rem] px-4 py-10 xl:pt-[14.063rem] xl:pb-[194px]">
        <article className="w-full xl:w-[570px]">
          <h2 className="font-playfair text-[30px] leading-normal font-bold tracking-[0.125rem] md:text-[4.875rem] md:leading-[6.875rem]">
            ABOUT n’ERA
          </h2>
          <div className="mt-5 text-base leading-[110.00000000000001%] font-normal md:mt-[45px]">
            <p>
              n’Era was originally founded by Vladyslav Detiuchenko in 2016 in
              Ukraine, with the core mission of presenting Ukrainian
              contemporary dance on the global stage. After the war began, n’Era
              found a new home in The Hague, the Netherlands, where it can now
              continue fulfilling its mission. n’Era Dance Productions is
              dedicated to supporting and promoting Ukrainian contemporary dance
              and art. Based in The Hague, Netherlands, we create performances
              that explore universal themes such as solidarity, resilience,
              peace, and human relationships. Through movement, we strive to
              foster cultural dialogue and inspire change, using dance as a
              powerful universal language that unites people and amplifies
              voices that must be heard.
            </p>
            <p>
              By engaging with a global audience, we aim to contribute to the
              creation of a more inclusive and empathetic society, where dance
              becomes a catalyst for reflection, inspiration, and hope.
            </p>
          </div>

          <button
            type="submit"
            className="mt-[29px] flex w-[8.313rem] cursor-pointer items-center justify-between border-1 border-white py-[0.438rem] pr-4 pl-[0.625rem] uppercase transition-all duration-400 hover:opacity-[0.5]"
          >
            <span>More</span>
            <RightIcon />
          </button>
        </article>
      </section>
      <article className="t-4 right-0 flex xl:absolute xl:top-[11.188rem]">
        <div className="relative hidden h-full w-full xl:block">
          <img
            className="z-10 h-[568px] w-[505px]"
            src="./about1.jpg"
            alt="Vladyslav Detiuchenko and Veronika Rakitina"
          />
          <img
            className="top-[16.875rem] right-[15.938rem] z-20 h-[370px] w-[370px] xl:absolute"
            src="./about2.jpg"
            alt="Vladyslav Detiuchenko and Veronika Rakitina"
          />
        </div>
      </article>
    </section>
  );
};
