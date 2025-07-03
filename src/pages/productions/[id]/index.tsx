import { Banner } from '../../../component/Banner';

const Index = () => {
  const arr = {
    image: './../productions/production_page_1.jpg',
    image_1: './../productions/production_6.jpg',
    image_2: './../productions/production_2.jpg',
    image_3: './../productions/production_4.jpg',
    alt: '',
    title: 'Stand by me',
    text: "She longs for his arrival. With dreams and intoxicating. illusions, she reaches out to the 'absolute darkness', a core that offers hope to lose oneself in the tender memories of timeless happiness. Where does this path lead, with the ghosts from the past? The spirits? Perhaps she finds herself in the embrace of a formless soul. When did we deviate from our path? Memory is the worst ally we have. Perhaps it is merely the invention of the mind - a play of tangled thoughts and absurdity, in the web of sorrow and readiness to embrace death for the sake of absolute honest love. What is reality and what is fiction? At what moment did we veer off course?",
    image2: './../productions/logo_auf_blau_eng_1.jpg',
  };

  const { title, image, image_1, image_2, image_3, image2, alt, text } =
    arr || {};

  return (
    <>
      <Banner playBtn={false} src="./../productions/banner.jpg" />

      <article className="relative container mx-auto max-w-[1202px] px-4 pt-[85px] pb-[57px]">
        <div className="grid grid-cols-1 gap-x-[30px] lg:grid-cols-[1fr_570px]">
          <div>
            <h2 className="font-playfair text-center text-[78px] leading-normal font-semibold tracking-[0.125rem] uppercase md:text-[4.875rem] xl:text-left">
              {title}
            </h2>
            <div className="mt-[55px] text-base leading-[110.00000000000001%] font-normal">
              {text}
            </div>
          </div>
          <div className="mt-[152px] h-[427px]">
            <img
              src={image}
              alt={alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        <article className="mt-[125px] grid grid-cols-3 gap-x-[30px]">
          <div>
            <img src={image_1} alt="" className="object-cover object-center" />
          </div>
          <div className="mt-[66px]">
            <img src={image_2} alt="" className="object-cover object-center" />
          </div>
          <div>
            <img src={image_3} alt="" className="object-cover object-center" />
          </div>
        </article>

        <article className="mt-[140px]">
          <h5 className="font-playfair mb-[27px] text-2xl leading-[40%] font-bold">
            CREDITS
          </h5>
          <div className="grid grid-cols-3 gap-x-[130px]">
            <div className="text-base leading-[110.00000000000001%] font-normal [&>p]:font-normal">
              <h6 className="mb-[6px] font-bold">Choreographer</h6>
              <p>Vladyslav Detiuchenko</p>
              <br />
              <h6 className="mb-[7px] font-bold">Choreographic Assistant:</h6>
              <p>Veronika Rakitina</p>
              <br />
              <h6 className="mb-[7px] font-bold">Music:</h6>
              <p>Yurii Shepeta</p>
              <br />
              <h6 className="mb-[7px] font-bold">
                Dancers of The Stuttgart Ballet:
              </h6>
              <p>Ruth Schultz, Maceo Gerard</p>
              <br />
              <h6 className="mb-[7px] font-bold">Costume design:</h6>
              <p>Vladyslav Detiuchenko, Veronika Rakitina</p>
              <br />
              <h6 className="mb-[7px] font-bold">Decor:</h6>
              <p>Gregory Petrovich</p>
              <br />
              <h6 className="mb-[7px] font-bold">Make up:</h6>
              <p>Veronika Rakitina</p>
              <br />
              <h6 className="mb-[7px] font-bold">Light design:</h6>
              <p>Rudiger Benz & David Sazinger & Vladyslav Detiuchenko</p>
            </div>

            <div>
              <h6 className="mb-[6px] font-bold">
                World premiere - May 25th 2024
              </h6>
              <h6 className="mb-[6px] font-bold">
                Noverre: Young Choreographers
              </h6>
              <h6 className="mb-[6px] font-bold">
                Produced by The Stuttgart Ballet
              </h6>
              <div className="mt-[40px]">
                <img src={image2} alt="" className="h-[96px] w-[170px]" />
              </div>
            </div>
          </div>
        </article>
      </article>
    </>
  );
};

export default Index;
