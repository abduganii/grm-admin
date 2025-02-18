import GloabalInput from "@/components/global-input";
import {
  BrCodeIcons,
  EditIcons,
  PlusIcons,
  QrCodeIcons,
  SearchAIIcons,
} from "@/components/icons";

export default function Action() {
  return (
    <div className="border-[#CBCBC1] border w-[34%]">
      <div className="bg-[#DBDAD1] border-[#CBCBC1] border-b  flex gap-1 p-[5px] ">
        <button className="gap-[1.5px] rounded-[2px] ml-1 py-[9px] px-[12px] text-[16px] text-[#E0DFD6] leading-[19px] bg-[#272727] flex items-center justify-center">
          <BrCodeIcons />
          Баркод
        </button>
        <button className="gap-[1.5px] rounded-[2px] ml-1 py-[9px] px-[12px] text-[16px] border-[#CBCBC1] border  leading-[19px] bg-[#E0DFD6] flex items-center justify-center">
          <QrCodeIcons />
          Баркод
        </button>
        <div className="flex items-center pl-2 justify-center bg-[#E0DFD6] border-[#CBCBC1] w-full border ">
          <SearchAIIcons />
          <input
            placeholder="search"
            className=" rounded-[2px]  py-[9px] pl-1 px-[12px]  text-[16px] w-full leading-[19px]"
          />
        </div>
        <button className="gap-[1.5px] rounded-[2px] p-[10px] ml-[10px] border-[#CBCBC1] border  bg-[#E0DFD6] flex items-center justify-center">
          <PlusIcons />
        </button>
      </div>

      <p className="py-[5px] px-[14px] leading-[14px] text-[12px] bg-[#DBDAD1] text-[#99998C]">
        Продукт найден
      </p>
      <div className="py-[5px] px-[14px] flex flex-wrap bg-[#E0DFD6] pb-[66px] items-center gap-[8px]">
        <GloabalInput
          className="clom3"
          placeholder="Коллекция"
          label="Коллекция"
          typeValue="input"
        />
        <GloabalInput
          className="clom3"
          placeholder="Коллекция"
          label="Коллекция"
          typeValue="input"
        />
        <GloabalInput
          className="clom3"
          placeholder="Коллекция"
          label="Коллекция"
          typeValue="input"
        />
        <GloabalInput
          className="clom3"
          placeholder="Коллекция"
          label="Коллекция"
          typeValue="input"
        />
        <GloabalInput
          className="clom3"
          placeholder="Коллекция"
          label="Коллекция"
          typeValue="input"
        />
        <GloabalInput
          className="clom3"
          placeholder="Коллекция"
          label="Коллекция"
          typeValue="input"
        />
      </div>

      <div className="bg-[#DBDAD1] border-[#CBCBC1] border-b  flex gap-1 p-[5px] ">
        <button className="gap-[1.5px] rounded-[2px] text-[#767671]  py-[5px] px-[12px] text-[16px] border-[#CBCBC1] border  leading-[19px] bg-[#E0DFD6] flex items-center justify-center">
          <PlusIcons color={"#767671"} />
          Создать новый
        </button>
        <button className="gap-[1.5px] rounded-[2px] text-[#767671] ml-1 py-[5px] px-[12px] text-[16px] border-[#CBCBC1] border  leading-[19px] bg-[#E0DFD6] flex items-center justify-center">
          <EditIcons color={"#767671"} />
          Изменить
        </button>
        <button className="gap-[1.5px] rounded-[2px]  py-[5px] px-[12px] text-[16px] text-[#E0DFD6] leading-[19px] bg-[#272727] flex items-center justify-center ml-auto">
          Добавить
        </button>
      </div>
    </div>
  );
}
