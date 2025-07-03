import { Banner } from '../../component/Banner';
import { BINews } from '../../module/BI-News';
import { BIPagination } from '../../module/BI-Pagination';

const Index = () => {
  const eventsData = [
    {
      id: 1,
      title: 'STAND BY ME and EXIT SIGN at Korzo Theater in The Hague',
      date: '25/05/25',
      text: 'In a thoughtfully curated double bill at The Hague’s Korzo Theatre, two choreographers take us on parallel journeys through the inner and outer landscapes of human striving. Stand By Me by Ukrainian artist Vladyslav Detiuchenko and Exit Sign by Dutch house choreographer Zino Schat are starkly different in tone and style but together they sketch a bleak yet compelling portrait of longing, ambition, and collapse.',
      image: './news/news1.jpg',
      alt: '',
    },
    {
      id: 2,
      image: './news/news2.jpg',
      title: 'LIGHT IN DARKNESS II at Korzo Theater in The Hague',
      date: '02/03/25',
      text: 'There could have been no more suitable location for Light in Darkness II, a benefit concert for Ukraine, than the Korzo Theater, situated in the heart of the city of peace and international justice. Organised by Veronika Rakitina and her partner Vladyslav Detiuchenko it brought together a group of exiled Ukrainian, and other artists, who demonstrated the rich vein of talent that is struggling for survival in their beleaguered country.',
      alt: '',
    },
    {
      id: 3,
      image: './news/news3.jpg',
      title: 'Vladyslav and Veronika Organize Second Charity Event for Ukraine',
      date: '30/01/25',
      text: 'Ukrainian choreographers and performers Vladyslav Detiuchenko and Veronika Rakitina are organizing a second evening on Saturday, March 1st, at Korzo in The Hague to raise money for the victims in Ukraine. Their mission is to draw attention to the brave fight for independence and freedom in Ukraine with Light in Darkness II, while also raising funds to help those in need. ',
      alt: '',
    },
    {
      id: 4,
      image: './news/news4.jpg',
      title: 'Office ipsum you must be muted.',
      date: '16/11/24',
      text: 'Office ipsum you must be muted. Please interim light metal hurting version looking growth productive. Charts users six crystallize nobody post. Innovation meat mindfulness teeth paradigm already beef room pain. Of only issues have pups meat solutionize.',
      alt: '',
    },
    {
      id: 5,
      image: './news/news5.jpg',
      title:
        "Office ipsum you must be muted. Win gave timepoint can't build switch 2 low.",
      date: '03/09/24',
      text:
        "Office ipsum you must be muted. Highlights for meat meaningful wider all. Bake land hear goalposts walk giant submit meat. Ipsum digital third you're discussion / teams. Tent lot and next guys creep. Into productions silently status whistles read. Moving we customer so managing. Place criticality horse level businesses skulls. Reality q1 winning create customer meeting drawing-board unlock canatics if.\n" +
        'Harvest moments cross at hanging. Performance assassin tomorrow underlying base. Baked meat my go event practices are shoot you.',
      alt: '',
    },
  ];
  return (
    <>
      <Banner playBtn={false} src="./../news/banner.jpg" />
      <div className="mx-automax-w-[1202px] relative container px-4 pt-[86px] pb-[70px]">
        <h2 className="font-playfair text-center text-[3.875rem] leading-normal font-bold tracking-[0.125rem] uppercase md:text-[4.875rem] xl:text-left">
          News
        </h2>
        <div className="mt-[76px]">
          <BINews data={eventsData} />
          <BIPagination pageSize={5} total={40} />
        </div>
      </div>
    </>
  );
};

export default Index;
