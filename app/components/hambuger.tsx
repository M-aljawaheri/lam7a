import { useState } from "react";

// Define the props for ButtonComponent
interface ButtonComponentProps {
  onButtonClick: (buttonState: boolean) => void; // Prop to notify the parent about the button state
}

const HamburgerButton: React.FC<ButtonComponentProps> = ({ onButtonClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const handleButtonClick = () => {
    setIsOpen(prevState => {
      onButtonClick(!prevState); // Notify the parent about the button state
      return !prevState;
    });
  };
  return (
    <button
      className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
      onClick={handleButtonClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );
};

export default HamburgerButton;
