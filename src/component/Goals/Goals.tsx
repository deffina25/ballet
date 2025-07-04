export const Goals = () => {
  return (
    <section className="container mx-auto grid max-w-[1202px] grid-cols-1 gap-[30px] px-4 pt-0 pb-[20px] xl:grid-cols-[1fr_569px] xl:pt-[58px] xl:pb-[93px]">
      <article>
        <h2 className="font-playfair text-center text-[30px] leading-[63px] font-bold tracking-[0.125rem] md:text-[4.875rem] xl:text-left">
          GOALS:
        </h2>

        <div className="mt-5 text-base leading-[110.00000000000001%] font-normal md:mt-[63px] [&>ul]:list-disc [&>ul]:pl-[19px] [&>ul>li]:mb-[18px]">
          <ul>
            <li>
              Support for Ukrainian culture and contemporary dance: Promote
              Ukrainian culture and develop Ukrainian contemporary dance on the
              international stage, providing a platform for Ukrainian artists to
              express themselves
            </li>
            <li>
              Increase awareness across the Netherlands and Europe that the war
              in Ukraine is still ongoing by presenting productions that amplify
              Ukrainian modern artists voices.
            </li>
            <li>
              Build a bridge between Ukrainian and Dutch contemporary dance
              artists through collaborations and cultural exchange
            </li>
            <li>
              Reminder of key values through art: Create artistic works that
              inspire solidarity, peace, and humanity.
            </li>
            <li>Organization of educational dance programs</li>
          </ul>
        </div>
      </article>
      <article className="text-center xl:text-right">
        <img
          src="/about/goals.png"
          width="569"
          height="493"
          alt=""
          className="inline-block"
        />
      </article>
    </section>
  );
};

export default Goals;
