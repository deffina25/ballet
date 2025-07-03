import { BIProduction } from '../../module/BI-Production';

const Index = () => {
  const eventsData = [
    {
      id: 1,
      title: 'Stand by me',
      image: './productions/production_1.jpg',
      alt: '',
    },
    {
      id: 2,
      title: 'Light in Darkness',
      image: './productions/production_2.jpg',
      alt: '',
    },
    {
      id: 3,
      title: 'Office ipsum unpack',
      image: './productions/production_3.jpg',
      alt: '',
    },
    {
      id: 4,
      title: 'Office ipsum ensure create',
      image: './productions/production_4.jpg',
      alt: '',
    },
    {
      id: 5,
      title: "Office ipsum didn't those donuts",
      image: './productions/production_5.jpg',
      alt: '',
    },
    {
      id: 6,
      title: 'Office ipsum work',
      image: './productions/production_6.jpg',
      alt: '',
    },
    {
      id: 7,
      title: 'Office ipsum',
      image: './productions/production_7.jpg',
      alt: '',
    },
    {
      id: 8,
      title: 'Office ipsum kimono',
      image: './productions/production_8.jpg',
      alt: '',
    },
    {
      id: 9,
      title: 'Lorem ipsum iaculis',
      image: './productions/production_9.jpg',
      alt: '',
    },
    {
      id: 10,
      title: 'Lorem ipsum bibendum dignissim',
      image: './productions/production_10.jpg',
      alt: '',
    },
    {
      id: 11,
      title: 'Lorem ipsum elementum',
      image: './productions/production_11.jpg',
      alt: '',
    },
    {
      id: 12,
      title: 'Lorem ipsum',
      image: './productions/production_12.jpg',
      alt: '',
    },
  ];
  return (
    <section className="container mx-auto min-h-[730px] max-w-[1202px] px-4 pt-[114px] pb-[109px]">
      <BIProduction data={eventsData} />
    </section>
  );
};

export default Index;
