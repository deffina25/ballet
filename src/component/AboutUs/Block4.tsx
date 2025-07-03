import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  data: {
    text: string;
    image: {
      url: string;
    };
  };
}

export const Block4: React.FC<Props> = ({ data }) => {
  const { image, text } = data || {};
  return (
    <section className="mt-[113px] grid w-full grid-cols-1 items-center justify-between gap-0 lg:grid-cols-[470px_571px] lg:gap-[31px] xl:gap-[31px]">
      <article className="flex justify-center xl:justify-end">
        <img
          src={`http://localhost:1337${image?.url}`}
          className="inline-block h-auto w-auto object-cover xl:h-[645px] xl:w-[470px]"
          alt=""
        />
      </article>
      <article>
        <div className="text-base leading-normal font-normal md:leading-[110%] [&>p]:mb-[1rem] [&>p]:last:mb-0">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </article>
    </section>
  );
};
