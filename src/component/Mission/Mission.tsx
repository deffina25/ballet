export const Mission = () => {
  return (
    <section className="container mx-auto grid max-w-[1202px] grid-cols-1 gap-[30px] px-4 pt-[33px] pb-[40px] xl:grid-cols-[430px_1fr] xl:pb-[5.813rem]">
      <article className="text-center xl:text-left">
        <img
          className="inline-block"
          src="./../../../public/about/mission.png"
          width="470"
          height="370"
          alt=""
        />
      </article>
      <article className="text-center xl:text-left">
        <h2 className="font-playfair text-[30px] leading-[66px] font-bold tracking-[0.125rem] md:text-[4.875rem]">
          MISSION:
        </h2>

        <div className="mt-5 text-base leading-[110.00000000000001%] font-normal md:mt-[65px]">
          Stichting n’Era is dedicated to supporting and promoting Ukrainian
          contemporary dance and art. Our dance works are created with the goal
          of conveying global themes such as solidarity, peace, hope, and human
          relationships, through pieces that become a universal language for
          spreading these messages. We aim to provide Ukrainian contemporary
          dancers and artists with a platform for self-expression and
          international recognition, strengthening the significance of Ukrainian
          art on the global stage.
        </div>
      </article>
    </section>
  );
};
