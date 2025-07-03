import React from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  data: {
    text: string;
  };
}

export const Block5: React.FC<Props> = ({ data }) => {
  const { text } = data || {};
  console.log('data', data);
  return (
    <section className="mt-[123px] ml-[199px] max-w-[771px]">
      <article>
        <div className="text-base leading-normal font-normal md:leading-[110%] [&>p]:mb-[1rem] [&>p]:last:mb-0">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </article>
    </section>
  );
};
