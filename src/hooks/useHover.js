import React, { useState } from "react";

const useHover = () => {
  const [hovered, setHovered] = useState(false);
  function onMouseEnter() {
    setHovered(true);
  }
  function onMouseLeave() {
    setHovered(false);
  }
  return [hovered, onMouseEnter, onMouseLeave];
};

export default useHover;
