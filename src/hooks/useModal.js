import React from "react";

export const useModal = () => {
  const [isOpen, setIsOpent] = React.useState(false);
  const open = () => setIsOpent(true);
  const close = () => setIsOpent(false);
  const toggle = () => setIsOpent(!isOpen);
  return { isOpen, open, close, toggle };
};
