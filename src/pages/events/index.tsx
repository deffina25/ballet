import { Banner } from '../../component/Banner';
import { BIEvents } from '../../module/Bl-Events';
import { BIPagination } from '../../module/BI-Pagination';

const Index = () => {
  const eventsData = [
    {
      id: 1,
      day: '27',
      month: 'OCT',
      title: 'My Orpheus',
      time: '4:00 PM',
      location: 'Kristiansund',
      address: 'Møre og Romsdal, Norway',
    },
    {
      id: 2,
      day: '02',
      month: 'NOV',
      title: 'My Orpheus',
      time: '4:00 PM 5:00 PM',
      location: 'Korzo Theater',
      address: '42 PrinsestraatDen Haag, ZH, 2513 CE, Netherlands',
    },
    {
      id: 3,
      day: '11',
      month: 'OCT',
      title: 'My Orpheus',
      time: '4:00 PM',
      location: 'Kristiansund',
      address: 'Møre og Romsdal, Norway',
    },
    {
      id: 4,
      day: '31',
      month: 'NOV',
      title: 'My Orpheus',
      time: '4:00 PM 5:00 PM',
      location: 'Korzo Theater',
      address: '42 PrinsestraatDen Haag, ZH, 2513 CE, Netherlands',
    },
    {
      id: 5,
      day: '27',
      month: 'OCT',
      title: 'My Orpheus',
      time: '4:00 PM',
      location: 'Kristiansund',
      address: 'Møre og Romsdal, Norway',
    },
    {
      id: 6,
      day: '02',
      month: 'NOV',
      title: 'My Orpheus',
      time: '4:00 PM 5:00 PM',
      location: 'Korzo Theater',
      address: '42 PrinsestraatDen Haag, ZH, 2513 CE, Netherlands',
    },
    {
      id: 7,
      day: '11',
      month: 'OCT',
      title: 'My Orpheus',
      time: '4:00 PM',
      location: 'Kristiansund',
      address: 'Møre og Romsdal, Norway',
    },
    {
      id: 8,
      day: '31',
      month: 'NOV',
      title: 'My Orpheus',
      time: '4:00 PM 5:00 PM',
      location: 'Korzo Theater',
      address: '42 PrinsestraatDen Haag, ZH, 2513 CE, Netherlands',
    },
  ];

  return (
    <>
      <Banner playBtn={false} src="./../banner/about.jpg" />
      <div className="relative container mx-auto min-h-[730px] max-w-[1202px] overflow-hidden px-4 pt-[86px] pb-[78px]">
        <h2 className="font-playfair text-center text-[3.875rem] leading-normal font-bold tracking-[0.125rem] uppercase md:text-[4.875rem] xl:text-left">
          Events
        </h2>
        <div className="mt-[45px]">
          <BIEvents data={eventsData} />

          <BIPagination pageSize={8} total={40} />
        </div>
      </div>
    </>
  );
};

export default Index;
