import React from "react";

function Button({ onClick, title }: { onClick: () => void; title: string }) {
  return (
    <button
      onClick={onClick}
      className="w-[85px] h-[40px] rounded-[5px] cursor-pointer text-white bg-nhc"
    >
      {title}
    </button>
  );
}

export default Button;
