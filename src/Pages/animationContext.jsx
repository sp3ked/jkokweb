import React, { createContext, useContext, useState, useEffect } from "react";

const AnimationContext = createContext();

export const useAnimationContext = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }) => {
  const [isAnimationDisabled, setIsAnimationDisabled] = useState(() => {
    const saved = localStorage.getItem("isAnimationDisabled");
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem(
      "isAnimationDisabled",
      JSON.stringify(isAnimationDisabled),
    );
  }, [isAnimationDisabled]);

  const toggleAnimation = () => {
    setIsAnimationDisabled((prev) => !prev);
  };

  return (
    <AnimationContext.Provider value={{ isAnimationDisabled, toggleAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
};
