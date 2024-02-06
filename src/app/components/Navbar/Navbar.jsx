import React from "react";

const Navbar = () => {
  return (
    <section className="fixed bottom-0 bg-[#2E2D2B] p-2 mx-20 rounded-t-md">
      <div className="flex justify-center items-center ">
        <a href="https://www.instagram.com/your-instagram-page/">
          <img src="/ig.png" alt="Instagram" className="w-4 h-4 mr-4" />
        </a>
        <a href="#">
          <img src="/wsp.png" alt="WhatsApp" className="w-4 h-4 mr-4" />
        </a>
        <a href="#">
          <img src="/home.png" alt="Home" className="w-4 h-4 mr-4" />
        </a>
        <a href="#">
          <img src="/next.png" alt="Next" className="w-4 h-4 mr-4" />
        </a>
        <a href="#">
          <img src="/github.png" alt="GitHub" className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default Navbar;

