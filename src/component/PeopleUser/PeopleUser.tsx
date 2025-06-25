import RightIcon from '../../../public/right.svg?react';

export const PeopleUser = () => {
  return (
    <section className="container mx-auto grid min-h-[934px] max-w-[1202px] grid-cols-1 justify-between px-4 pt-[71px] pb-[71px] md:pb-[138px] xl:grid-cols-2">
      <article className="mt-0 text-center md:mt-[80px]">
        <img
          src="./vladislay-veronika.jpg"
          className="h-[645px] w-[470px] object-cover"
          alt="Vladyslav Detiuchenko and Veronika Rakitina"
        />
      </article>
      <article>
        <h2 className="font-playfair mt-[10px] text-center text-[30px] leading-[110.00000000000001%] font-bold tracking-[0.125rem] uppercase md:mt-0 md:text-[4.875rem] md:leading-[87px] xl:text-right">
          Vladyslav{' '}
          <span className="text-5 font-semibold tracking-[0.125rem] md:text-[4.875rem]">
            &
          </span>{' '}
          veronika
        </h2>

        <div className="mt-[20px] w-full text-center text-base leading-normal font-normal md:mt-[69px] md:text-left md:leading-[110.00000000000001%] xl:max-w-[469px]">
          <p>
            Vladyslav Detiuchenko and Veronika Rakitina are dancers,
            choreographers, and artistic directors of n’Era Dance Productions.
          </p>
          <br />
          <p>
            The full-scale Russian invasion of Ukraine in 2022 drastically
            changed their artistic path. Forced to leave their homeland, they
            moved to the Netherlands, where from 2022 to 2024 they worked as
            dancers—and Vladyslav also as a choreographer—with the United
            Ukrainian Ballet, which supported their initiatives and became a
            platform for their growth. Over time, they discovered a strong
            creative connection and a shared need to collaborate in order to
            bring bold and profound ideas to life.
          </p>
          <br />
          <p>
            Since 2023, they have been working as an artistic duo: they jointly
            develop the concepts of their works, with Vladyslav creating the
            choreography and Veronika supporting him and managing the production
            design. They have collaborated with well-known production companies
            such as Senf Production, Korzo, and Magnezy Dance Productions. Their
            dance films have been screened at Nederlands Dansdagen and Cinedans
            in the Netherlands, as well as in the USA, Croatia, Australia, and
            Ukraine.
          </p>
        </div>

        <button
          type="submit"
          className="mt-[1.938rem] flex w-[8.313rem] cursor-pointer items-center justify-between border-1 border-white py-[0.438rem] pr-4 pl-[0.625rem] uppercase transition-all duration-400 hover:opacity-[0.5]"
        >
          <span>More</span>
          <RightIcon />
        </button>
      </article>
    </section>
  );
};
