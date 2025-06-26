import { News } from '../component/News';
import { About } from '../component/About';
import { Events } from '../component/Events';
import { Banner } from '../component/Banner';
import { Partners } from '../component/Partners';
import { Subscribe } from '../component/Subscribe';
import { PeopleUser } from '../component/PeopleUser';
import { SliderSection } from '../component/SliderSection';

export const Index = () => {
  return (
    <>
      <Banner src="./banner.jpg" />
      <About />
      <PeopleUser />
      <SliderSection />
      <Events />
      <News />
      <Subscribe />
      <Partners />
    </>
  );
};

export default Index;
