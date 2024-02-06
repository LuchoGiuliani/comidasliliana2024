function Navbar() {
  return (
    <section className="fixed bottom-0 mx-[30%] rounded-t-md bg-[#2E2D2B] p-2">
      <div className="flex items-center justify-center gap-2 ">
        <a href="https://www.instagram.com/luchogiuliani/">
          <img alt="Instagram" className=" " src="/ig.png" />
        </a>
        <a href="/">
          <img alt="WhatsApp" className=" " src="/wsp.png" />
        </a>
        <a href="/">
          <img alt="Home" className=" " src="/home.png" />
        </a>
        <a href="/">
          <img alt="Next" className="" src="/next.png" />
        </a>
        <a href="/">
          <img alt="GitHub" className="" src="/github.png" />
        </a>
      </div>
    </section>
  );
}

export default Navbar;
