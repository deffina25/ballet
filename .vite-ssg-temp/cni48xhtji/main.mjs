import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { createRoot } from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import * as React from 'react';
import React__default, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useReducer,
} from 'react';
import { Link, BrowserRouter, useRoutes } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
const menu$1 = {
  m0: 'Home',
  m1: 'About',
  m2: 'Productions',
  m3: 'Events',
  m4: 'News',
  m5: 'Contact',
  m6: 'n’ERA',
  m7: 'Vladislav & Veronika',
};
const language$1 = { pl: 'Pl', en: 'En' };
const translationEN = {
  menu: menu$1,
  language: language$1,
};
const menu = {
  m0: 'Home',
  m1: 'About',
  m2: 'Productions',
  m3: 'Events',
  m4: 'News',
  m5: 'Contact',
  m6: 'n’ERA',
  m7: 'Vladislav & Veronika',
};
const language = { pl: 'Pl', en: 'En' };
const translationPl = {
  menu,
  language,
};
const fallbackLng = [localStorage.getItem('lang')] && ['en'];
const availableLanguages = ['en', 'pl'];
const resources = {
  en: {
    translation: translationEN,
  },
  pl: {
    translation: translationPl,
  },
};
i18n.use(initReactI18next).init({
  resources,
  fallbackLng,
  detection: {
    checkWhitelist: true,
  },
  debug: false,
  whitelist: availableLanguages,
  interpolation: {
    escapeValue: false,
  },
});
const AppContext = createContext({});
const LANG = 1;
const initialState = {
  lang: localStorage.getItem('language') || 'ru',
};
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANG:
      return { ...state, lang: action.payload };
    default:
      return state;
  }
};
const SvgRight$1 = (props) =>
  /* @__PURE__ */ React.createElement(
    'svg',
    {
      width: 20,
      height: 10,
      viewBox: '0 0 20 10',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
    },
    /* @__PURE__ */ React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M15 0L14.293 0.707L18.086 4.5H0V5.5H18.086L14.293 9.293L15 10L20 5L15 0Z',
      fill: 'white',
    }),
  );
const NewsItem = ({ item }) => {
  const { id, img, title, date, text } = item;
  return /* @__PURE__ */ jsxs(
    'article',
    {
      children: [
        /* @__PURE__ */ jsx('div', {
          className: 'h-[430px] border-t-slate-200',
          children: /* @__PURE__ */ jsx('img', { src: img, alt: '' }),
        }),
        /* @__PURE__ */ jsx('h5', {
          className: 'mt-6 text-2xl font-semibold tracking-[2px] uppercase',
          children: title,
        }),
        /* @__PURE__ */ jsx('p', {
          className: 'mt-2.5 text-lg font-light',
          children: date,
        }),
        /* @__PURE__ */ jsx('p', {
          className: 'mt-5 text-base font-normal',
          children: text,
        }),
        /* @__PURE__ */ jsxs('button', {
          type: 'submit',
          className:
            'mt-5 flex w-[8.313rem] cursor-pointer items-center justify-between border-1 border-white py-[0.438rem] pr-4 pl-[0.625rem] uppercase transition-all duration-400 hover:opacity-[0.5]',
          children: [
            /* @__PURE__ */ jsx('span', { children: 'More' }),
            /* @__PURE__ */ jsx(SvgRight$1, {}),
          ],
        }),
      ],
    },
    id,
  );
};
const News = () => {
  const arr = [
    {
      id: 1,
      img: './new1.png',
      title: 'STAND BY ME and EXIT SIGN at Korzo Theater in The Hague',
      date: '23/05/25',
      text: 'In a thoughtfully curated double bill at The Hague’s Korzo Theatre, two choreographers take us on parallel journeys through the inner and outer landscapes of human striving. Stand By Me by Ukrainian artist Vladyslav Detiuchenko and Exit Sign by Dutch house choreographer Zino Schat are starkly different in tone and style but together they sketch a bleak yet compelling portrait of longing, ambition, and collapse.',
    },
    {
      id: 2,
      img: './new2.png',
      title: 'LIGHT IN DARKNESS II at Korzo Theater in The Hague',
      date: '02/03/25',
      text: 'There could have been no more suitable location for Light in Darkness II, a benefit concert for Ukraine, than the Korzo Theater, situated in the heart of the city of peace and international justice. Organised by Veronika Rakitina and her partner Vladyslav Detiuchenko it brought together a group of exiled Ukrainian, and other artists, who demonstrated the rich vein of talent that is struggling for survival in their beleaguered country.',
    },
    {
      id: 3,
      img: './new3.png',
      title: 'Vladyslav and Veronika Organize Second Charity Event for Ukraine',
      date: '30/01/25',
      text: 'Ukrainian choreographers and performers Vladyslav Detiuchenko and Veronika Rakitina are organizing a second evening on Saturday, March 1st, at Korzo in The Hague to raise money for the victims in Ukraine. Their mission is to draw attention to the brave fight for independence and freedom in Ukraine with Light in Darkness II, while also raising funds to help those in need. ',
    },
  ];
  return /* @__PURE__ */ jsxs('section', {
    className:
      'container mx-auto max-w-[1202px] px-4 pt-[7.688rem] pb-[5.813rem]',
    children: [
      /* @__PURE__ */ jsx('h2', {
        className:
          'font-playfair text-right text-[4.875rem] leading-[40%] font-bold tracking-[0.125rem] uppercase',
        children: 'News',
      }),
      /* @__PURE__ */ jsx('div', {
        className: 'mx-auto mt-[7.438rem]',
        children: /* @__PURE__ */ jsx('div', {
          className: 'grid grid-cols-3 gap-[1.875rem]',
          children:
            arr == null
              ? void 0
              : arr.map((item) => /* @__PURE__ */ jsx(NewsItem, { item })),
        }),
      }),
    ],
  });
};
const About = () => {
  return /* @__PURE__ */ jsxs('section', {
    className: 'relative mx-auto h-[904px] max-w-[90rem]',
    children: [
      /* @__PURE__ */ jsx('section', {
        className:
          'container mx-auto grid max-w-[75.125rem] px-4 pt-[14.063re] pb-[12.125rem]',
        children: /* @__PURE__ */ jsxs('article', {
          className: 'w-[570px]',
          children: [
            /* @__PURE__ */ jsx('h2', {
              className:
                'font-playfair text-[4.875rem] leading-[6.875rem] font-bold tracking-[0.125rem]',
              children: 'ABOUT n’ERA',
            }),
            /* @__PURE__ */ jsxs('p', {
              className:
                'mt-16 text-base leading-[110.00000000000001%] font-normal',
              children: [
                /* @__PURE__ */ jsx('p', {
                  children:
                    'n’Era was originally founded by Vladyslav Detiuchenko in 2016 in Ukraine, with the core mission of presenting Ukrainian contemporary dance on the global stage. After the war began, n’Era found a new home in The Hague, the Netherlands, where it can now continue fulfilling its mission. n’Era Dance Productions is dedicated to supporting and promoting Ukrainian contemporary dance and art. Based in The Hague, Netherlands, we create performances that explore universal themes such as solidarity, resilience, peace, and human relationships. Through movement, we strive to foster cultural dialogue and inspire change, using dance as a powerful universal language that unites people and amplifies voices that must be heard.',
                }),
                /* @__PURE__ */ jsx('br', {}),
                /* @__PURE__ */ jsx('p', {
                  children:
                    'By engaging with a global audience, we aim to contribute to the creation of a more inclusive and empathetic society, where dance becomes a catalyst for reflection, inspiration, and hope.',
                }),
              ],
            }),
            /* @__PURE__ */ jsxs('button', {
              type: 'submit',
              className:
                'mt-[1.875rem] flex w-[8.313rem] cursor-pointer items-center justify-between border-1 border-white py-[0.438rem] pr-4 pl-[0.625rem] uppercase transition-all duration-400 hover:opacity-[0.5]',
              children: [
                /* @__PURE__ */ jsx('span', { children: 'More' }),
                /* @__PURE__ */ jsx(SvgRight$1, {}),
              ],
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsx('article', {
        className: 'absolute top-[11.188rem] right-0',
        children: /* @__PURE__ */ jsxs('div', {
          className: 'relative h-full w-full',
          children: [
            /* @__PURE__ */ jsx('img', {
              className: 'z-10',
              src: './about1.jpg',
              width: '505',
              height: '568',
              alt: 'Vladyslav Detiuchenko and Veronika Rakitina',
            }),
            /* @__PURE__ */ jsx('img', {
              className: 'absolute top-[16.875rem] right-[20.938rem] z-20',
              src: './about2.png',
              width: '370',
              height: '370',
              alt: 'Vladyslav Detiuchenko and Veronika Rakitina',
            }),
          ],
        }),
      }),
    ],
  });
};
const Banner = () => {
  return /* @__PURE__ */ jsx('div', {
    className: 'relative h-[36.75rem]',
    children: /* @__PURE__ */ jsx('img', {
      src: './banner.jpg',
      alt: '',
      className: 'absolute inset-0 h-full w-full object-cover',
    }),
  });
};
const partners = [
  {
    img: '../../../public/partners/p1.png',
    alt: 'partner 1',
  },
  {
    img: '../../../public/partners/p2.png',
    alt: 'partner 2',
  },
  {
    img: '../../../public/partners/p3.png',
    alt: 'partner 3',
  },
  {
    img: '../../../public/partners/p4.png',
    alt: 'partner 4',
  },
  {
    img: '../../../public/partners/p5.png',
    alt: 'partner 5',
  },
  {
    img: '../../../public/partners/p6.png',
    alt: 'partner 6',
  },
  {
    img: '../../../public/partners/p7.png',
    alt: 'partner 7',
  },
  {
    img: '../../../public/partners/p8.png',
    alt: 'partner 8',
  },
  {
    img: '../../../public/partners/p9.png',
    alt: 'partner 9',
  },
  {
    img: '../../../public/partners/p10.png',
    alt: 'partner 10',
  },
  {
    img: '../../../public/partners/p11.png',
    alt: 'partner 11',
  },
];
const Partners = () => {
  return /* @__PURE__ */ jsxs('div', {
    className: 'container mx-auto max-w-[1202px] px-4 py-[5.75rem] text-center',
    children: [
      /* @__PURE__ */ jsx('h2', {
        className:
          'font-playfair text-[4.875rem] font-bold tracking-[0.125rem] uppercase',
        children: 'Partners',
      }),
      /* @__PURE__ */ jsx('div', {
        className: 'mx-auto mt-[4.5rem]',
        children: /* @__PURE__ */ jsx('div', {
          className: 'flex max-w-[1110px] flex-wrap justify-center gap-4',
          children:
            partners == null
              ? void 0
              : partners.map(({ img, alt }, index) =>
                  /* @__PURE__ */ jsx(
                    'div',
                    {
                      className: 'h-[170px] w-[170px]',
                      children: /* @__PURE__ */ jsx('img', {
                        src: img || '',
                        alt,
                        className: 'h-full w-full object-cover',
                      }),
                    },
                    index,
                  ),
                ),
        }),
      }),
    ],
  });
};
const Subscribe = () => {
  return /* @__PURE__ */ jsxs('div', {
    className:
      'wrapper-subscribe relative flex h-[453px] items-center justify-center',
    children: [
      /* @__PURE__ */ jsx('div', {
        className: 'absolute top-0 left-0 z-2 h-full w-full',
        style: {
          background: `
      linear-gradient(90deg, rgba(255, 215, 0, 0.5) 0%, rgba(0, 87, 184, 0.5) 100%),
      radial-gradient(32.06% 60.93% at 50% 43.71%, rgba(17, 17, 23, 0.3773) 0%, rgba(17, 17, 23, 0) 100%)
    `,
        },
      }),
      /* @__PURE__ */ jsxs('div', {
        className: 'z-3',
        children: [
          /* @__PURE__ */ jsx('h2', {
            className:
              'font-playfair text-center text-[4.875rem] leading-[40%] font-bold tracking-[0.125rem] uppercase',
            children: 'Subscribe',
          }),
          /* @__PURE__ */ jsx('p', {
            className: 'mt-7 text-center',
            children: 'And never miss out on our new events.',
          }),
          /* @__PURE__ */ jsx('div', { className: 'mt-11' }),
        ],
      }),
    ],
  });
};
const PeopleUser = () => {
  return /* @__PURE__ */ jsxs('section', {
    className:
      'container mx-auto grid max-w-[1202px] grid-cols-[470px_569px] justify-between px-4 pt-[71px] pb-[168px]',
    children: [
      /* @__PURE__ */ jsx('article', {
        className: 'mt-20',
        children: /* @__PURE__ */ jsx('img', {
          src: './vladislay-veronika.jpg',
          alt: 'Vladyslav Detiuchenko and Veronika Rakitina',
        }),
      }),
      /* @__PURE__ */ jsxs('article', {
        children: [
          /* @__PURE__ */ jsxs('h2', {
            className:
              'font-playfair text-right text-[4.875rem] leading-[110px] font-bold tracking-[0.125rem] uppercase',
            children: [
              'Vladyslav',
              ' ',
              /* @__PURE__ */ jsx('span', {
                className: 'text-[4.875rem] font-semibold tracking-[0.125rem]',
                children: '&',
              }),
              ' ',
              'veronika',
            ],
          }),
          /* @__PURE__ */ jsxs('div', {
            className:
              'mt-16 text-base leading-[110.00000000000001%] font-normal',
            children: [
              /* @__PURE__ */ jsx('p', {
                children:
                  "Vladyslav Detiuchenko and Veronika Rakitina are dancers, choreographers, and artistic directors of n'Era Dance Productions.",
              }),
              /* @__PURE__ */ jsx('p', {
                children:
                  'The full-scale Russian invasion of Ukraine in 2022 drastically altered their artistic path. Forced to leave their homeland, they moved to the Netherlands, where from 2022 to 2024 they worked as dancers—and Vladyslav also as a choreographer—with the United Ukrainian Ballet. Over time, they discovered a strong artistic connection and the need for a creative collaboration to bring bold and profound ideas to life. Since 2023, they have formed an artistic duo, working together on the development of new productions: Vladyslav creates the choreography, while Veronika assists him and takes charge of the design.',
              }),
            ],
          }),
          /* @__PURE__ */ jsxs('button', {
            type: 'submit',
            className:
              'mt-[1.875rem] flex w-[8.313rem] cursor-pointer items-center justify-between border-1 border-white py-[0.438rem] pr-4 pl-[0.625rem] uppercase transition-all duration-400 hover:opacity-[0.5]',
            children: [
              /* @__PURE__ */ jsx('span', { children: 'More' }),
              /* @__PURE__ */ jsx(SvgRight$1, {}),
            ],
          }),
        ],
      }),
    ],
  });
};
const SvgRight = (props) =>
  /* @__PURE__ */ React.createElement(
    'svg',
    {
      width: 6,
      height: 11,
      viewBox: '0 0 6 11',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
    },
    /* @__PURE__ */ React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M0.71 0.17L6 5.59L0.71 11L0 10.29L4.585 5.59L0 0.88L0.71 0.17Z',
      fill: 'white',
    }),
  );
const SvgLeft = (props) =>
  /* @__PURE__ */ React.createElement(
    'svg',
    {
      width: 6,
      height: 11,
      viewBox: '0 0 6 11',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
    },
    /* @__PURE__ */ React.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M5.29 0.17L0 5.59L5.29 11L6 10.29L1.415 5.59L6 0.88L5.29 0.17Z',
      fill: 'white',
    }),
  );
const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);
  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);
  const onSelect = useCallback((emblaApi2) => {
    setPrevBtnDisabled(!emblaApi2.canScrollPrev());
    setNextBtnDisabled(!emblaApi2.canScrollNext());
  }, []);
  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);
  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};
const PrevButton = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ jsxs('button', {
    className: 'embla__button embla__button--prev',
    type: 'button',
    ...restProps,
    children: [/* @__PURE__ */ jsx(SvgLeft, {}), children],
  });
};
const NextButton = (props) => {
  const { children, ...restProps } = props;
  return /* @__PURE__ */ jsxs('button', {
    className: 'embla__button embla__button--next',
    type: 'button',
    ...restProps,
    children: [/* @__PURE__ */ jsx(SvgRight, {}), children],
  });
};
const BlSlider = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return /* @__PURE__ */ jsx('div', {
    className: 'theme-dark',
    children: /* @__PURE__ */ jsxs('section', {
      className: 'embla',
      children: [
        /* @__PURE__ */ jsx('div', {
          className: 'embla__viewport',
          ref: emblaRef,
          children: /* @__PURE__ */ jsx('div', {
            className: 'embla__container',
            children: slides.map((img, index) =>
              /* @__PURE__ */ jsx(
                'div',
                {
                  className: 'embla__slide',
                  children: /* @__PURE__ */ jsx('div', {
                    className: 'embla__slide__img',
                    children: /* @__PURE__ */ jsx('img', {
                      width: '570px',
                      height: '570px',
                      className: 'h-full w-full',
                      src: img,
                      alt: img,
                    }),
                  }),
                },
                index,
              ),
            ),
          }),
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'embla__controls',
          children: /* @__PURE__ */ jsxs('div', {
            className: 'embla__buttons',
            children: [
              /* @__PURE__ */ jsx(PrevButton, {
                onClick: onPrevButtonClick,
                disabled: prevBtnDisabled,
              }),
              /* @__PURE__ */ jsx(NextButton, {
                onClick: onNextButtonClick,
                disabled: nextBtnDisabled,
              }),
            ],
          }),
        }),
      ],
    }),
  });
};
const SliderSection = () => {
  const OPTIONS = { loop: true };
  const SLIDES = [
    './slider/slide1.jpg',
    './slider/slide2.jpg',
    './slider/slide3.jpg',
    './slider/slide1.jpg',
    './slider/slide2.jpg',
    './slider/slide3.jpg',
  ];
  return /* @__PURE__ */ jsx('div', {
    className: 'container mx-auto max-w-[1440px]',
    children: /* @__PURE__ */ jsx(BlSlider, {
      slides: SLIDES,
      options: OPTIONS,
    }),
  });
};
const Index = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(Banner, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(PeopleUser, {}),
      /* @__PURE__ */ jsx(SliderSection, {}),
      /* @__PURE__ */ jsx(News, {}),
      /* @__PURE__ */ jsx(Subscribe, {}),
      /* @__PURE__ */ jsx(Partners, {}),
    ],
  });
};
const routes = [
  {
    caseSensitive: false,
    path: '/',
    element: React__default.createElement(Index),
  },
];
const menuTopList = (t) => [
  {
    id: 1,
    name: t('menu.m0'),
    href: '/home',
  },
  {
    id: 2,
    name: t('menu.m1'),
    children: [
      {
        id: '2-1',
        name: '',
        href: '',
      },
    ],
  },
  {
    id: 3,
    name: t('menu.m2'),
    href: '/productions',
  },
  {
    id: 4,
    name: t('menu.m3'),
    href: '/events',
  },
  {
    id: 5,
    name: t('menu.m4'),
    href: '/news',
  },
  {
    id: 6,
    name: t('menu.m5'),
    href: '/contact',
  },
];
const Menu = () => {
  const { t } = useTranslation();
  const renderMenu = () => {
    const arr = menuTopList(t);
    return arr == null
      ? void 0
      : arr.map(({ id, name, href, children }) => {
          if (href) {
            return /* @__PURE__ */ jsx(
              'li',
              {
                className:
                  'border-b-1 border-transparent transition-all duration-300 hover:border-b-1 hover:border-[#FFFEFE]',
                children: /* @__PURE__ */ jsx(Link, {
                  to: href,
                  className: 'color-[#FFFEFE]',
                  children: name,
                }),
              },
              id,
            );
          }
          return /* @__PURE__ */ jsxs(
            'li',
            {
              className:
                'border-b-1 border-transparent transition-all duration-300 hover:border-b-1 hover:border-[#FFFEFE]',
              children: [
                /* @__PURE__ */ jsx('div', {
                  className: 'cursor-pointer',
                  children: name,
                }),
                /* @__PURE__ */ jsx('div', {
                  children: /* @__PURE__ */ jsx('ul', {
                    className: 'list-inside',
                    children:
                      children == null
                        ? void 0
                        : children.map(
                            ({ id: id2, name: name2, href: href2 }) =>
                              /* @__PURE__ */ jsx(
                                'li',
                                {
                                  children: /* @__PURE__ */ jsx(Link, {
                                    to: href2,
                                    children: name2,
                                  }),
                                },
                                id2,
                              ),
                          ),
                  }),
                }),
              ],
            },
            id,
          );
        });
  };
  return /* @__PURE__ */ jsx('div', {
    children: /* @__PURE__ */ jsx('ul', {
      className:
        'font-work flex items-center gap-x-[14px] text-[0.938rem] font-light tracking-[0.188rem] uppercase',
      children: renderMenu(),
    }),
  });
};
const SvgF = (props) =>
  /* @__PURE__ */ React.createElement(
    'svg',
    {
      width: 20,
      height: 28,
      viewBox: '0 0 20 28',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
    },
    /* @__PURE__ */ React.createElement('path', {
      d: 'M2.2425 11.7773C0.938504 11.7773 0.666504 12.0333 0.666504 13.2587V15.4813C0.666504 16.708 0.938504 16.9627 2.2425 16.9627H5.39317V25.852C5.39317 27.0787 5.6665 27.3333 6.96917 27.3333H10.1212C11.4252 27.3333 11.6972 27.0773 11.6972 25.852V16.9627H15.2358C16.2238 16.9627 16.4785 16.7827 16.7505 15.888L17.4265 13.6667C17.8918 12.1347 17.6038 11.7773 15.9105 11.7773H11.6972V8.07467C11.6972 7.256 12.4025 6.592 13.2718 6.592H17.7572C19.0612 6.592 19.3332 6.33733 19.3332 5.112V2.14667C19.3332 0.921333 19.0612 0.666667 17.7572 0.666667H13.2718C8.92117 0.666667 5.39317 3.98267 5.39317 8.07467V11.7773H2.2425Z',
      stroke: 'white',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  );
const SvgI = (props) =>
  /* @__PURE__ */ React.createElement(
    'svg',
    {
      width: 28,
      height: 28,
      viewBox: '0 0 28 28',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
    },
    /* @__PURE__ */ React.createElement('path', {
      d: 'M1.3335 14C1.3335 8.02933 1.3335 5.04267 3.18816 3.188C5.04283 1.33333 8.02816 1.33333 14.0002 1.33333C19.9708 1.33333 22.9575 1.33333 24.8122 3.188C26.6668 5.04267 26.6668 8.028 26.6668 14C26.6668 19.9707 26.6668 22.9573 24.8122 24.812C22.9575 26.6667 19.9722 26.6667 14.0002 26.6667C8.0295 26.6667 5.04283 26.6667 3.18816 24.812C1.3335 22.9573 1.3335 19.972 1.3335 14Z',
      stroke: 'white',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
    /* @__PURE__ */ React.createElement('path', {
      d: 'M21.344 6.66667H21.3307M20 14C20 15.5913 19.3679 17.1174 18.2426 18.2426C17.1174 19.3679 15.5913 20 14 20C12.4087 20 10.8826 19.3679 9.75736 18.2426C8.63214 17.1174 8 15.5913 8 14C8 12.4087 8.63214 10.8826 9.75736 9.75736C10.8826 8.63214 12.4087 8 14 8C15.5913 8 17.1174 8.63214 18.2426 9.75736C19.3679 10.8826 20 12.4087 20 14Z',
      stroke: 'white',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  );
const HeaderRight = () => {
  return /* @__PURE__ */ jsxs('div', {
    className: 'flex items-center gap-x-2',
    children: [
      /* @__PURE__ */ jsx(Link, {
        to: '#subscribe',
        className:
          'font-work mr-6 flex h-8 w-[7.375rem] items-center justify-center bg-[#FFD700] p-[0.313rem] text-sm font-black text-black uppercase transition-all duration-400 hover:opacity-[0.7]',
        children: /* @__PURE__ */ jsx('span', { children: 'subscribe' }),
      }),
      /* @__PURE__ */ jsx(Link, {
        to: '#',
        className: 'transition-all duration-400 hover:opacity-[0.7]',
        children: /* @__PURE__ */ jsx(SvgI, {}),
      }),
      /* @__PURE__ */ jsx(Link, {
        to: '#',
        className: 'transition-all duration-400 hover:opacity-[0.7]',
        children: /* @__PURE__ */ jsx(SvgF, {}),
      }),
    ],
  });
};
const SvgLogo = (props) =>
  /* @__PURE__ */ React.createElement(
    'svg',
    {
      width: 45,
      height: 32,
      viewBox: '0 0 45 32',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
    },
    /* @__PURE__ */ React.createElement(
      'g',
      { clipPath: 'url(#clip0_1334_1354)' },
      /* @__PURE__ */ React.createElement('path', {
        d: 'M11.6248 28.0625L11.46 28.363L15.8616 30.7778L16.0264 30.4774L11.6248 28.0625Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M11.6258 25.5997L11.4585 25.8987L15.8605 28.3619L16.0278 28.0629L11.6258 25.5997Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M11.6249 24.4031L11.4595 24.7032L15.8613 27.1301L16.0267 26.83L11.6249 24.4031Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M7.81576 8.66041L7.64844 8.95943L12.0504 11.4226L12.2177 11.1236L7.81576 8.66041Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M7.81437 7.46339L7.64893 7.76346L12.0507 10.1904L12.2161 9.8903L7.81437 7.46339Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.214665 28.0642L0.0512695 28.3653L4.49669 30.777L4.66008 30.4758L0.214665 28.0642Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.21713 26.808L0.0512695 27.1079L4.49693 29.5671L4.6628 29.2672L0.21713 26.808Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.216885 25.617L0.0517578 25.9172L4.49765 28.3624L4.66277 28.0621L0.216885 25.617Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.215925 24.4025L0.0512695 24.703L4.49695 27.139L4.6616 26.8384L0.215925 24.4025Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.215311 23.2073L0.0517578 23.5084L4.49707 25.923L4.66062 25.6219L0.215311 23.2073Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.216083 21.967L0.0512695 22.2674L4.49683 24.7063L4.66164 24.4059L0.216083 21.967Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.215663 20.7546L0.0512695 21.0552L4.49676 23.486L4.66115 23.1854L0.215663 20.7546Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.215663 19.5364L0.0512695 19.8371L4.49676 22.2679L4.66115 21.9672L0.215663 19.5364Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.216677 11.0659L0.050293 11.3654L4.49569 13.8346L4.66208 13.5351L0.216677 11.0659Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.21713 9.86878L0.0512695 10.1686L4.49694 12.6278L4.6628 12.328L0.21713 9.86878Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.216397 8.67741L0.0512695 8.97765L4.49716 11.4228L4.66229 11.1226L0.216397 8.67741Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.216414 7.4635L0.0517578 7.764L4.49744 10.2L4.66209 9.89946L0.216414 7.4635Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.215799 6.26712L0.0522461 6.56823L4.49756 8.98284L4.66111 8.68174L0.215799 6.26712Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.216083 5.02584L0.0512695 5.32625L4.49683 7.76517L4.66164 7.46476L0.216083 5.02584Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.216151 3.81403L0.0517578 4.11468L4.49725 6.54549L4.66164 6.24484L0.216151 3.81403Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.216151 2.59495L0.0517578 2.89559L4.49725 5.3264L4.66164 5.02576L0.216151 2.59495Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.215978 12.2721L0.0512695 12.5726L4.49652 15.0093L4.66123 14.7088L0.215978 12.2721Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.216904 1.34666L0.0507812 1.64635L4.49603 4.1104L4.66215 3.8107L0.216904 1.34666Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M39.4388 2.57255V0L0.203549 0.0889584L0.019043 0.459289L4.50848 2.93102H39.4362L39.4237 6.206L7.84212 6.1579L7.65036 6.49858L12.093 8.9993L43.9421 8.90243V2.60088L39.4388 2.57255ZM12.182 8.65599L8.4668 6.56579L39.5495 6.54998L43.1204 8.56307L12.182 8.65664V8.65599ZM43.5995 8.43853L39.767 6.27717L39.7795 2.91718L43.5995 2.9409V8.43787V8.43853Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M40.3766 25.5719V23.0943H11.6542L11.4519 23.4929L15.9308 25.9548H40.2942L40.2791 29.2311H15.9625L11.6259 26.8108L11.4592 27.1099L15.8735 29.5737H40.4043L44.0852 31.6573H15.9598L11.6259 29.2449L11.4592 29.5441L15.2554 31.6573H4.63311L0.216154 29.2693L0.0527344 29.5711L4.54678 32H44.7876V25.5719H40.3773H40.3766ZM44.4443 31.4662L40.6217 29.3029L40.6376 25.9146H44.4437V31.4662H44.4443Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M35.7129 12.1722L12.0829 12.2558L7.81614 9.87043L7.64811 10.1683L12.0506 12.6301L12.0539 12.6242V13.4492L7.81482 11.1231L7.65009 11.4223L12.0519 13.8386L12.0539 13.834V14.6202L7.81482 12.2723L7.64943 12.5728L12.0545 15.0103V15.034L35.56 15.0419L35.5066 18.3413L0.139356 18.3399L0.000976562 18.6345L4.5372 21.0713L40.114 21.0509V15.0432H40.116V14.6808L35.7135 12.1708L35.7129 12.1722ZM4.6222 20.7293L0.8161 18.6833L35.6305 18.6846L39.2817 20.7089L4.62286 20.7293H4.6222ZM39.7707 20.5889L35.8479 18.4124L35.9026 15.1177H39.7707V20.5883V20.5889Z',
        fill: 'white',
      }),
    ),
    /* @__PURE__ */ React.createElement(
      'defs',
      null,
      /* @__PURE__ */ React.createElement(
        'clipPath',
        { id: 'clip0_1334_1354' },
        /* @__PURE__ */ React.createElement('rect', {
          width: 44.7876,
          height: 32,
          fill: 'white',
        }),
      ),
    ),
  );
const Header = () => {
  return /* @__PURE__ */ jsx('header', {
    className: 'fixed top-0 right-0 left-0 z-50 bg-[#111117]',
    children: /* @__PURE__ */ jsx('div', {
      className: 'gradient-border-bottom',
      children: /* @__PURE__ */ jsx('div', {
        className: 'container mx-auto max-w-[1202px] px-4',
        children: /* @__PURE__ */ jsxs('div', {
          className: 'flex h-[52px] items-center justify-between',
          children: [
            /* @__PURE__ */ jsx(Link, {
              to: '/',
              className: 'transition-all duration-400 hover:opacity-[0.7]',
              children: /* @__PURE__ */ jsx(SvgLogo, {}),
            }),
            /* @__PURE__ */ jsx(Menu, {}),
            /* @__PURE__ */ jsx(HeaderRight, {}),
          ],
        }),
      }),
    }),
  });
};
const SvgFooterLogo = (props) =>
  /* @__PURE__ */ React.createElement(
    'svg',
    {
      width: 170,
      height: 121,
      viewBox: '0 0 170 121',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
    },
    /* @__PURE__ */ React.createElement(
      'g',
      { clipPath: 'url(#clip0_1334_1392)' },
      /* @__PURE__ */ React.createElement('path', {
        d: 'M43.9567 106.111L43.3335 107.247L59.9772 116.378L60.6004 115.242L43.9567 106.111Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M43.9603 96.799L43.3276 97.9297L59.9726 107.244L60.6053 106.113L43.9603 96.799Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M43.9561 92.2745L43.3306 93.4092L59.9748 102.586L60.6004 101.451L43.9561 92.2745Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M29.5531 32.7472L28.9204 33.8779L45.5654 43.1919L46.198 42.0612L29.5531 32.7472Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M29.5482 28.2208L28.9226 29.3555L45.5668 38.5322L46.1924 37.3976L29.5482 28.2208Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.811687 106.118L0.193848 107.257L17.0031 116.376L17.6209 115.237L0.811687 106.118Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.820276 101.368L0.193115 102.502L17.0033 111.801L17.6304 110.667L0.820276 101.368Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.819945 96.8637L0.195557 97.999L17.0066 107.245L17.631 106.109L0.819945 96.8637Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.817185 92.2719L0.19458 93.4082L17.0048 102.619L17.6274 101.483L0.817185 92.2719Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.813993 87.7521L0.195557 88.8906L17.0044 98.0209L17.6228 96.8823L0.813993 87.7521Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.817047 83.0623L0.193848 84.1982L17.0036 93.4204L17.6268 92.2845L0.817047 83.0623Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.815461 78.4784L0.193848 79.6152L17.0034 88.8067L17.625 87.6699L0.815461 78.4784Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.814728 73.872L0.193115 75.0088L17.0026 84.2003L17.6242 83.0635L0.814728 73.872Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.820057 41.8429L0.190918 42.9756L17.0001 52.3122L17.6292 51.1796L0.820057 41.8429Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.820276 37.3164L0.193115 38.4502L17.0033 47.7491L17.6305 46.6153L0.820276 37.3164Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.817504 32.811L0.193115 33.9463L17.0041 43.192L17.6285 42.0568L0.817504 32.811Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.818894 28.2212L0.196289 29.3574L17.0065 38.5684L17.6291 37.4321L0.818894 28.2212Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.815457 23.6974L0.197021 24.8359L17.0059 33.9662L17.6243 32.8276L0.815457 23.6974Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.817047 19.0037L0.193848 20.1396L17.0036 29.3618L17.6268 28.2259L0.817047 19.0037Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.81717 14.4218L0.195557 15.5586L17.0051 24.7501L17.6267 23.6133L0.81717 14.4218Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.81717 9.81241L0.195557 10.9492L17.0051 20.1407L17.6267 19.0039L0.81717 9.81241Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.817383 46.4039L0.19458 47.54L17.0032 56.7539L17.626 55.6178L0.817383 46.4039Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M0.819801 5.09237L0.19165 6.22559L17.0002 15.5427L17.6284 14.4095L0.819801 5.09237Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M149.128 9.72744V0L0.76993 0.336374L0.0722656 1.73669L17.0479 11.0829H149.118L149.071 23.4665L29.6533 23.2846L28.9282 24.5728L45.727 34.0286L166.156 33.6623V9.83458L149.128 9.72744ZM46.0633 32.7304L32.0154 24.8269L149.547 24.7671L163.049 32.3791L46.0633 32.7329V32.7304ZM164.861 31.9082L150.369 23.7356L150.417 11.0306L164.861 11.1203V31.9057V31.9082Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M152.674 96.6938V87.3252H44.0674L43.3024 88.8326L60.2383 98.1415H152.362L152.305 110.53H60.3579L43.9602 101.378L43.3298 102.509L60.0215 111.826H152.779L166.697 119.704H60.3479L43.9602 110.582L43.3298 111.714L57.6843 119.704H17.5187L0.81715 110.675L0.199219 111.816L17.1923 121H169.353V96.6938H152.676H152.674ZM168.055 118.982L153.601 110.802L153.661 97.9895H168.052V118.982H168.055Z',
        fill: 'white',
      }),
      /* @__PURE__ */ React.createElement('path', {
        d: 'M135.038 46.0256L45.6875 46.3421L29.554 37.3223L28.9186 38.4485L45.5654 47.7573L45.5779 47.7349V50.8545L29.549 42.0589L28.9261 43.1901L45.5704 52.327L45.5779 52.3096V55.2822L29.549 46.4044L28.9236 47.5406L45.5804 56.7572V56.8469L134.46 56.8768L134.259 69.3526L0.526178 69.3476L0.00292969 70.4613L17.1555 79.6755L151.68 79.5983V56.8818H151.688V55.5114L135.041 46.0207L135.038 46.0256ZM17.4769 78.3823L3.08511 70.6457L134.727 70.6507L148.533 78.3051L17.4794 78.3823H17.4769ZM150.382 77.8516L135.549 69.6217L135.756 57.1634H150.382V77.8491V77.8516Z',
        fill: 'white',
      }),
    ),
    /* @__PURE__ */ React.createElement(
      'defs',
      null,
      /* @__PURE__ */ React.createElement(
        'clipPath',
        { id: 'clip0_1334_1392' },
        /* @__PURE__ */ React.createElement('rect', {
          width: 169.353,
          height: 121,
          fill: 'white',
        }),
      ),
    ),
  );
const Footer = () => {
  const phone = '(316) 555-0116';
  const email = 'neradance@gmail.com';
  const emailTitle = ' n’ERAdance.gmail.com';
  return /* @__PURE__ */ jsx('footer', {
    className: 'gradient-border-top',
    children: /* @__PURE__ */ jsxs('div', {
      className:
        'container mx-auto max-w-[1202px] px-4 pt-[6.063rem] pb-[2.875rem]',
      children: [
        /* @__PURE__ */ jsxs('div', {
          className: 'grid grid-cols-2 items-center gap-16',
          children: [
            /* @__PURE__ */ jsx('div', {
              children: /* @__PURE__ */ jsx(Link, {
                to: '/',
                className: 'transition-all duration-400 hover:opacity-[0.5]',
                children: /* @__PURE__ */ jsx(SvgFooterLogo, {}),
              }),
            }),
            /* @__PURE__ */ jsxs('div', {
              children: [
                /* @__PURE__ */ jsx('h3', {
                  className: 'font-playfair mb-6 text-[32px] uppercase',
                  children: 'Contacts',
                }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'text-base font-normal',
                  children: [
                    /* @__PURE__ */ jsx('p', {
                      className: 'mb-[0.938rem]',
                      children: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
                    }),
                    /* @__PURE__ */ jsx('p', {
                      className: 'mb-[0.938rem]',
                      children: /* @__PURE__ */ jsx('a', {
                        className:
                          'transition-all duration-400 hover:opacity-[0.5]',
                        href: `mailto:${email}`,
                        children: emailTitle,
                      }),
                    }),
                    /* @__PURE__ */ jsx('p', {
                      className: 'mb-[0.938rem]',
                      children: /* @__PURE__ */ jsx('a', {
                        className:
                          'transition-all duration-400 hover:opacity-[0.5]',
                        href: `tel:${phone}`,
                        children: phone,
                      }),
                    }),
                  ],
                }),
                /* @__PURE__ */ jsxs('div', {
                  className: 'flex gap-x-3.5',
                  children: [
                    /* @__PURE__ */ jsx(Link, {
                      to: '#',
                      className:
                        'transition-all duration-400 hover:opacity-[0.7]',
                      children: /* @__PURE__ */ jsx(SvgI, {}),
                    }),
                    /* @__PURE__ */ jsx(Link, {
                      to: '#',
                      className:
                        'transition-all duration-400 hover:opacity-[0.7]',
                      children: /* @__PURE__ */ jsx(SvgF, {}),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'mt-16',
          children: /* @__PURE__ */ jsx('p', {
            className: 'font-work text-sm font-light',
            children:
              "2025 © n'Era Dance Productions. All Rights Reserved. Website by",
          }),
        }),
      ],
    }),
  });
};
function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const value = { state, dispatch };
  return /* @__PURE__ */ jsx(BrowserRouter, {
    children: /* @__PURE__ */ jsxs(AppContext.Provider, {
      value,
      children: [
        /* @__PURE__ */ jsx(Header, {}),
        /* @__PURE__ */ jsx('main', {
          className: 'mt-[52px]',
          children: /* @__PURE__ */ jsx(RouterView, {}),
        }),
        /* @__PURE__ */ jsx(Footer, {}),
      ],
    }),
  });
}
const RouterView = () => useRoutes(routes);
createRoot(document.getElementById('root')).render(
  /* @__PURE__ */ jsx(App, {}),
);
