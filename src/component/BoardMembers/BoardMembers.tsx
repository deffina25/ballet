export const BoardMembers = () => {
  return (
    <section className="container mx-auto grid min-h-[540px] max-w-[1202px] grid-cols-1 gap-4 px-4 py-[42px] xl:grid-cols-[570px_1fr] xl:gap-[130px]">
      <article className="text-base leading-[110.00000000000001%] font-normal [&>p]:font-normal">
        <h5 className="font-playfair mb-[27px] text-2xl leading-[40%] font-bold">
          BOARD MEMBERS
        </h5>
        <h6 className="mb-[6px] font-bold">Direction</h6>
        <p>Vladyslav Detiuchenko & Veronika Rakitina : artistic directors</p>
        <br />
        <h6 className="mb-[7px] font-bold">Supervisory Board</h6>
        <p>Andrew van Esch: Chairman</p>
        <p>Anno Fekkes: Secretary</p>
      </article>
      <article className="mt-[36px] transition-all duration-400">
        <div>
          <a
            href="#"
            className="mb-[20px] inline-block w-full transition-all duration-400 hover:opacity-[0.5]"
          >
            <div className="grid h-[50px] w-full grid-cols-[36px_1fr] items-center justify-start gap-x-[27px]">
              <div>
                <img src="/file.svg" alt="" />
              </div>
              <div className="text-[18px] leading-[110%] font-bold">
                Lorem ipsum
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="mb-[20px] inline-block w-full transition-all duration-400 hover:opacity-[0.5]"
          >
            <div className="grid h-[50px] w-full grid-cols-[36px_1fr] items-center justify-start gap-x-[27px]">
              <div>
                <img src="/file.svg" alt="" />
              </div>
              <div className="text-[18px] leading-[110%] font-bold">
                Lorem ipsum
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="mb-[20px] inline-block w-full transition-all duration-400 hover:opacity-[0.5]"
          >
            <div className="grid h-[50px] w-full grid-cols-[36px_1fr] items-center justify-start gap-x-[27px]">
              <div>
                <img src="/file.svg" alt="" />
              </div>
              <div className="text-[18px] leading-[110%] font-bold">
                Lorem ipsum
              </div>
            </div>
          </a>
        </div>
        <div>
          <a
            href="#"
            className="mb-0 inline-block w-full transition-all duration-400 hover:opacity-[0.5]"
          >
            <div className="grid h-[50px] w-full grid-cols-[36px_1fr] items-center justify-start gap-x-[27px]">
              <div>
                <img src="/file.svg" alt="" />
              </div>
              <div className="text-[18px] leading-[110%] font-bold">
                Lorem ipsum
              </div>
            </div>
          </a>
        </div>
      </article>
    </section>
  );
};
