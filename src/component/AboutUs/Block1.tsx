import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  data: {
    image: {
      url: string;
    };
    name1: string;
    name2: string;
    text: string;
  };
}

export const Block1: React.FC<Props> = ({ data }) => {
  const { image, text, name1, name2 } = data || {};

  return (
    <section className="grid w-full grid-cols-1 justify-between gap-0 lg:grid-cols-[470px_574px] lg:gap-[50px] xl:gap-[130px]">
      <article className="text-center xl:text-left">
        <img
          src={`http://localhost:1337${image?.url}`}
          className="inline-block h-auto w-auto object-cover xl:h-[645px] xl:w-[470px]"
          alt="Vladyslav Detiuchenko and Veronika Rakitina"
        />
      </article>
      <article>
        <h2 className="font-playfair mt-[50px] text-center text-[30px] leading-[110.00000000000001%] font-bold tracking-[0.125rem] uppercase md:mt-0 md:text-[4.875rem] md:leading-[87px] xl:mt-[10px] xl:text-right">
          {name1}{' '}
          <span className="text-5 font-semibold tracking-[0.125rem] md:text-[4.875rem]">
            &
          </span>{' '}
          {name2}
        </h2>
        <div className="mt-[20px] w-full text-center text-base leading-normal font-normal md:mt-[69px] md:text-left md:leading-[110.00000000000001%] xl:max-w-[469px] [&>p]:mb-[1rem] [&>p]:last:mb-0">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </article>
    </section>
  );
};
