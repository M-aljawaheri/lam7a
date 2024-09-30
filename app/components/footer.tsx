import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full text-md text-center py-2 text-white">
      {`Computing Club ${year}`}
    </footer>
  );
}

export default Footer;
