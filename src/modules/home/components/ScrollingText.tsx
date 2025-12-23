const NameMessage = () => {
  return (
    <>
      <span>I BUILD IT</span>
      <span>·</span>
      <span>I BRAND IT</span>
      <span>·</span>
      <span>I SHIP IT</span>
      <span>·</span>
    </>
  );
};

const RenderScrollingText = () => (
  <div className="animate-marquee space-x-10 whitespace-nowrap text-[3rem] sm:text-[5rem] uppercase text-slate-900 pointer-events-none pt-2">
    <NameMessage />
    <NameMessage />
    <NameMessage />
    <NameMessage />
  </div>
);

const ScrollingText = () => {
  return (
    <div className="relative flex w-full overflow-hidden ">
      <RenderScrollingText />
      <RenderScrollingText />
    </div>
  );
};

export default ScrollingText;
