import { useState } from "react";
import { ToogleButton } from "./ToogleButton";

export function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="box">
      <ToogleButton onClick={handleClick}>{isOpen ? "➖" : "➕"}</ToogleButton>
      {isOpen && children}
    </div>
  );
}
