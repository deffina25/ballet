import { About } from '../../../component/About';
import { Banner } from '../../../component/Banner';
import { Mission } from '../../../component/Mission';
import { Goals } from '../../../component/Goals';
import { BoardMembers } from '../../../component/BoardMembers';

const Index = () => {
  return (
    <>
      <Banner playBtn={false} src="./../banner/about.jpg" />
      <About more={false} />
      <Mission />
      <Goals />
      <BoardMembers />
    </>
  );
};

export default Index;
