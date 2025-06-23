export const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="wrapper-subscribe relative flex h-[453px] items-center justify-center overflow-hidden py-4"
    >
      <div
        className="absolute top-0 left-0 z-2 h-full w-full"
        style={{
          background: `
      linear-gradient(90deg, rgba(255, 215, 0, 0.5) 0%, rgba(0, 87, 184, 0.5) 100%),
      radial-gradient(32.06% 60.93% at 50% 43.71%, rgba(17, 17, 23, 0.3773) 0%, rgba(17, 17, 23, 0) 100%)
    `,
        }}
      />
      <div className="z-3">
        <h2 className="font-playfair text-center text-[3.275rem] leading-[40%] font-bold tracking-[0.125rem] uppercase md:text-[4.875rem]">
          Subscribe
        </h2>
        <p className="mt-[40px] text-center">
          And never miss out on our new events.
        </p>
        <div className="mt-11 flex">
          <input
            style={{ boxShadow: '3px 4px 10.2px 0px #00000040' }}
            placeholder="EMAIL"
            className="h-[48px] w-[220px] bg-white px-[30px] text-base leading-[40%] font-normal text-[#363636] outline-none sm:w-[401px]"
            type="email"
          />
          <button
            style={{ boxShadow: '-3px 0px 6.5px 0px #0000001A' }}
            className="font-work flex h-12 w-auto cursor-pointer items-center justify-center bg-[#FFD700] p-[1.313rem] text-base font-black text-black uppercase transition-all duration-400 hover:opacity-[0.7] md:w-[170px]"
          >
            subscribe
          </button>
        </div>
      </div>
    </section>
  );
};
