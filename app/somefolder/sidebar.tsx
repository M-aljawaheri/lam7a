import { useState } from "react";
// TODO Fix the mobile view. It is not great at all.
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-black items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed z-30 flex items-center cursor-pointer left-10 top-6"
          fill="white"
          viewBox="0 0 100 80"
          width="70"
          height="70"
        >
          <rect width="100" height="5"></rect>
          <rect y="30" width="100" height="5"></rect>
          <rect y="60" width="100" height="5"></rect>
        </svg>
      )}

      <div
        className={`top-0 left-0 w-[35vw] bg-white  p-10 pl-20 text-black fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "-translate-x-0 " : "-translate-x-full"
        }`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-black">
          FUTURE MENU
        </h3>
      </div>
    </>
  );
};

export default Sidebar;