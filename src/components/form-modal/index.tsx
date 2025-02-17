import React from "react";

import { XIcons } from "../icons";
interface IFormModal {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}
export default function FormModal({ title, children, onClose }: IFormModal) {
  return (
    <div className="w-screen h-screen fixed flex items-center  justify-center top-0 left-0 bg-[#21212166]">
      <div className="w-full max-w-[960px] m-auto bg-[#E0DFD6] pt-[20px] pr-[20px] py-[30px] px-[50px]">
        <div className="flex  items-start justify-between">
          <h4 className="text-[24px] mt-[10px] mb-[20px] leading-[28px]">
            {title}
          </h4>
          <div
            onClick={onClose}
            className="rounded-full p-2 inline-block  cursor-pointer hover:bg-[#D6D6CD] active:bg-transparent"
          >
            <XIcons />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
