import { useState } from 'react';

const useHoverState = () => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);

  const handleMouseOver = (element: string) => {
    setHoveredElement(element);
  };

  const handleMouseOut = () => {
    setHoveredElement(null);
  };

  return {
    isHovered: !!hoveredElement,
    hoveredElement,
    handleMouseOver,
    handleMouseOut,
  };
};

export default useHoverState;
