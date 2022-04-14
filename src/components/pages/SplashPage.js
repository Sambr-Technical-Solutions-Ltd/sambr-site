import React, { useEffect, useState } from "react";
import Cursor from "../Cursor";

const SplashPage = () => {
  const [typingText, setTypingText] = useState("");
  const [typeIndex, setTypeIndex] = useState(0);
  const copy =
    "Hi there!\nMy name is Jacob.\nWelcome to Sambr Technical Solutions!";

  useEffect(() => {
    if (typeIndex == copy.length) return;

    const timeout = copy[typeIndex] == "\n" ? 1000 : 70;

    setTimeout(() => {
      setTypingText(`${typingText}${copy[typeIndex]}`);
      setTypeIndex(typeIndex + 1);
    }, timeout);
  }, [typingText]);

  return (
    <div className="splash">
      <span style={{ whiteSpace: "pre-wrap" }}>{typingText}</span>
      <Cursor />
    </div>
  );
};

export default SplashPage;
