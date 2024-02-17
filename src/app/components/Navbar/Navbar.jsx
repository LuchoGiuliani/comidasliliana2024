function Navbar() {
  return (
    <section className="fixed bottom-0 left-0 right-0 mx-auto w-fit flex-wrap rounded-t-md bg-[#2E2D2B] p-2">
      <div className="flex items-center justify-center gap-2 ">
        <a href="https://www.instagram.com/luchogiuliani/">
          <img alt="Instagram" className="max-w-[20px] sm:max-w-[26px] " src="/ig.png" />
        </a>
        <a href="/">
          <img alt="WhatsApp" className="max-w-[20px] sm:max-w-[26px]  " src="/wsp.png" />
        </a>
        <a href="/">
          <img alt="Home" className="max-w-[20px] sm:max-w-[26px]  " src="/home.png" />
        </a>
        <a href="/">
          <img alt="Next" className="max-w-[20px]  sm:max-w-[26px]" src="/next.png" />
        </a>
        <a href="/">
          <img alt="GitHub" className="max-w-[20px] sm:max-w-[26px] " src="/github.png" />
        </a>
      </div>
    </section>
  );
}

export default Navbar;
