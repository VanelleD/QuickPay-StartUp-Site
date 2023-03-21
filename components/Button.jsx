import React from "react";

const Buttons = ({ color, text }) => {
  const colors = {
    primary: "bg-blue hover:bg-indigo-3 text-white",
  };

  const btn = `rounded-md px-4 py-2 ${colors[color]}`;
  return <button className={btn}>{text}</button>;
};

export default Buttons;
