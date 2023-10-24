import { useState } from "react";
// TODO Fix the mobile view. It is not great at all.
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const underline =
    <div className="opacity-0 group-hover:opacity-100 after:absolute after:-bottom-2 after:h-1 after:right-0 after:-z-10 after:h-2 after:w-full after:-translate-y-2 after:bg-white after:content-['']">
    </div>;
  return (
    <>
      {showSidebar ? (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-50 flex items-center cursor-pointer left-10 top-6 -translate-x-[40%] -translate-y-[25%]"
          fill="white"
          viewBox="0 0 100 80"
          width="70"
          height="70"
        >
          {/* Diagonal line (from top-left to bottom-right) */}
          <rect x="35" y="37.5" width="30" height="5" transform="rotate(45 50 40)"></rect>
          {/* Diagonal line (from bottom-left to top-right) */}
          <rect x="35" y="37.5" width="30" height="5" transform="rotate(-45 50 40)"></rect>
        </svg>

      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer left-4 top-6"
          fill="white"
          viewBox="0 0 100 80"
          width="75"
          height="75"
        >
          <rect width="75" height="5"></rect>
          <rect y="17" width="75" height="5"></rect>
          <rect y="34" width="75" height="5"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0 lg:w-[20vw] md:w-[30vw] w-[40vw] bg-customOrange p-6 shadow-xl lg:p-10 text-left text-white fixed h-full z-40  ease-in-out duration-400 ${showSidebar ? "-translate-x-0 " : "-translate-x-[200%]"
          }`}
      >
        <ul className="mt-10 max-w-max lg:mt-20 text-xl md:text-2xl lg:text-3xl">
          <div className="relative group max-w-max lg:mt-24 mt-16 duration-300 hover:-translate-y-1">
            <a href="/">Home</a>
            {underline}
          </div>
          <div className="relative group max-w-max lg:mt-10 mt-4 duration-300 hover:-translate-y-1">
            <a href="/team">Team</a>{underline}
          </div>
          <div className="relative group max-w-max lg:mt-10 mt-4 duration-300 hover:-translate-y-1">
            <a href="/notices">Notices</a>{underline}
          </div>
          <div className="relative group max-w-max lg:mt-10 mt-4 duration-300 hover:-translate-y-1">
            <a href="/gallery">Photo Gallery</a>{underline}
          </div>
          <div className="relative group max-w-max lg:mt-10 mt-4 duration-300 hover:-translate-y-1">
            <a href="/contact">Contact Us</a>{underline}
          </div>
        </ul>

      </div>
    </>
  );
};

export default Sidebar;