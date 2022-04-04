import React from "react";

export type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined ;
  disabled?: boolean;
  onClick? : () => void;
};

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick
}) => {
  return (
    <button
      disabled={false}
      type={ type }
      className={`
        w-full mt-6 tracking-widest
        border-b-blue-600 bg-blue-500 py-3 text-white font-bold
        hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400
      `}
      onClick={onClick}
    >
      { children }
    </button>
  );
};