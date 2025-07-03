import React from 'react';
import ReactMarkdown from 'react-markdown';
import RightIcon from '../../../public/right.svg?react';

interface Props {
  data: {
    text: string;
    more: string;
    image: {
      url: string;
    };
  };
}

export const Block3: React.FC<Props> = ({ data }) => {
  const { image, text, more } = data || {};
  return (
    <section className="items-top mt-[113px] grid w-full grid-cols-1 justify-end gap-0 lg:grid-cols-[470px_470px] lg:gap-[31px] xl:gap-[31px]">
      <article>
        <div className="text-base leading-normal font-normal md:leading-[110%] [&>p]:mb-[1rem] [&>p]:last:mb-0">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
        {more && (
          <a
            href={more || ''}
            type="submit"
            className="mt-[29px] flex w-[8.313rem] cursor-pointer items-center justify-between border-1 border-white py-[0.438rem] pr-4 pl-[0.625rem] uppercase transition-all duration-400 hover:opacity-[0.5]"
          >
            <span>More</span>
            <RightIcon />
          </a>
        )}
      </article>

      <article className="flex justify-center xl:justify-end">
        <img
          src={`http://localhost:1337${image?.url}`}
          className="inline-block h-auto w-auto object-cover xl:h-[645px] xl:w-[470px]"
          alt=""
        />
      </article>
    </section>
  );
};
