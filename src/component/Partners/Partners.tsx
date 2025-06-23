import { partners } from './list/partnersList.ts';

export const Partners = () => {
  return (
    <section className="container mx-auto max-w-[1202px] px-4 py-5 text-center md:pt-[6.063rem] md:pb-[7.625rem]">
      <h2 className="font-playfair text-[3.275rem] font-bold tracking-[0.125rem] uppercase md:text-[4.875rem]">
        Partners
      </h2>
      <div className="mx-auto mt-2 md:mt-[3.313rem]">
        <div className="flex max-w-[1110px] flex-wrap justify-center gap-0">
          {partners?.map(({ img, alt }, index) => (
            <article
              key={index}
              className="h-[100px] w-[100px] md:h-[170px] md:w-[170px]"
            >
              <img
                src={img || ''}
                alt={alt}
                className="h-full w-full object-cover"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
