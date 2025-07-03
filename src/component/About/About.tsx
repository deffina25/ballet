import RightIcon from '../../../public/right.svg?react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

interface Props {
  more?: boolean;
}

interface AboutAttributes {
  title: string;
  text: string;
  image1: {
    url: string;
  };
  image2: {
    url: string;
  };
  url: string;
}

interface AboutData {
  id: number;
  attributes: AboutAttributes;
}

interface ApiResponse {
  data: AboutData;
}

export const About: React.FC<Props> = ({ more = true }) => {
  const [about, setAbout] = useState<AboutAttributes | null>(null);

  useEffect(() => {
    axios
      .get<ApiResponse>('http://localhost:1337/api/home', {
        params: {
          populate: {
            banner: {
              populate: '*',
            },
            about: {
              populate: '*',
            },
          },
        },
      })
      .then((response: any) => {
        console.log('response.data.data', response.data.data);
        setAbout(response.data.data.about);
      })
      .catch((error: any) => {
        console.error('Ошибка при загрузке данных', error);
      });
  }, []);

  const { title, text, image1, image2, url } = about || {};

  return (
    <>
      {about && (
        <section className="relative mx-auto h-full max-w-[90rem] xl:min-h-[904px]">
          <section className="container mx-auto grid max-w-[75.125rem] px-4 py-10 xl:pt-[14.063rem] xl:pb-[194px]">
            <article className="w-full xl:w-[570px]">
              {title && (
                <h2 className="font-playfair text-[30px] leading-normal font-bold tracking-[0.125rem] md:text-[4.875rem] md:leading-[6.875rem]">
                  {title}
                </h2>
              )}
              {text && (
                <div className="mt-5 text-base leading-[110.00000000000001%] font-normal md:mt-[45px]">
                  <ReactMarkdown>{text}</ReactMarkdown>
                </div>
              )}

              {more && (
                <a
                  href={url || ''}
                  type="submit"
                  className="mt-[29px] flex w-[8.313rem] cursor-pointer items-center justify-between border-1 border-white py-[0.438rem] pr-4 pl-[0.625rem] uppercase transition-all duration-400 hover:opacity-[0.5]"
                >
                  <span>More</span>
                  <RightIcon />
                </a>
              )}
            </article>
          </section>
          <article className="t-4 right-0 flex xl:absolute xl:top-[11.188rem]">
            <div className="relative hidden h-full w-full xl:block">
              <img
                className="z-10 h-[568px] w-[505px]"
                src={`http://localhost:1337${image1?.url}`}
                alt="Vladyslav Detiuchenko and Veronika Rakitina"
              />
              <img
                className="top-[16.875rem] right-[15.938rem] z-20 h-[370px] w-[370px] xl:absolute"
                src={`http://localhost:1337${image2?.url}`}
                alt="Vladyslav Detiuchenko and Veronika Rakitina"
              />
            </div>
          </article>
        </section>
      )}
    </>
  );
};
