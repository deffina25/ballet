import { Block1, Block2, Block3, Block4, Block5 } from './index.ts';

export const AboutUs = ({ data }: { data: any }) => {
  const { block1, block2, block3, block4, block5 } = data || {};

  return (
    <>
      <Block1 data={block1} />
      <Block2 data={block2} />
      <Block3 data={block3} />
      <Block4 data={block4} />
      <Block5 data={block5} />
    </>
  );
};
