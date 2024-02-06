function Navbar() {
  return (
    <section className="fixed bottom-0 mx-[30%] rounded-t-md bg-[#2E2D2B] p-2">
      <div className="flex items-center justify-center ">
        <a href="https://www.instagram.com/luchogiuliani/">
          <img alt="Instagram" className="mr-4 h-4 w-4" src="/ig.png" />
        </a>
        <a href="/">
          <img alt="WhatsApp" className="mr-4 h-4 w-4" src="/wsp.png" />
        </a>
        <a href="/">
          <img alt="Home" className="mr-4 h-4 w-4" src="/home.png" />
        </a>
        <a href="/">
          <img alt="Next" className="mr-4 h-4 w-4" src="/next.png" />
        </a>
        <a href="/">
          <img alt="GitHub" className="h-4 w-4" src="/github.png" />
        </a>
      </div>
    </section>
  );
}

export default Navbar;
