import React from "react";
import { Dialog } from "@headlessui/react";
import { useLocation } from "react-router-dom";

export const Modal = ({ isOpen, close, children }) => {
  const location = useLocation();
  React.useEffect(() => {
    close();
  }, [location.pathname]);
  return (
    <Dialog open={isOpen} onClose={close} className="absolute z-50">
      <div className="fixed inset-0 flex w-screen items-center bg-[#0000005d] justify-center p-4">
        <Dialog.Panel className=" w-[500px] rounded bg-white p-5">
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
