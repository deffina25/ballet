import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  data: {
    title: string;
    text: string;
  };
}

export const Block2: React.FC<Props> = ({ data }) => {
  const { title, text } = data || {};

  return (
    <section className="mt-[113px] grid w-full grid-cols-1 items-center justify-start gap-0 lg:grid-cols-[468px_270px] lg:gap-[31px] xl:gap-[31px]">
      <article>
        <div className="text-base leading-normal font-normal md:leading-[110.00000000000001%] [&>p]:mb-[1rem] [&>p]:last:mb-0">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </article>
      <article className="text-center xl:text-left">
        <h6 className="font-playfair text-[32px] font-bold italic">{title}</h6>
      </article>
    </section>
  );
};
