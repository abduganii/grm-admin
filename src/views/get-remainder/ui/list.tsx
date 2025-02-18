import {
  EditIcons,
  FilterIcons,
  RemoveIcons,
  SearchAIIcons,
} from "@/components/icons";

export default function List() {
  return (
    <div className="border-[#CBCBC1] border w-[65%]">
      <div className="bg-[#D6D6CD] border-[#CBCBC1] border-b  flex gap-1 p-[5px] ">
        <div className="flex items-center pl-2 justify-center bg-[#E0DFD6] border-[#CBCBC1] w-full max-w-[240px] border ">
          <SearchAIIcons />
          <input
            placeholder="search"
            className=" rounded-[2px]  py-[9px] pl-1 px-[12px]  text-[16px] w-full leading-[19px]"
          />
        </div>
        <button className="border-[#D1D0C8] text-black text-[12px] py-[5px] px-[16px] leading-[19px]  gap-1 shadow-none rounded-none border-[1px]  flex items-center justify-center bg-[#E0DFD6] hover:bg-[#D1D0C8]">
          <FilterIcons /> Фильтр
        </button>
        <button className="border-[#D1D0C8] text-black text-[12px] py-[5px] px-[16px] leading-[19px]  gap-1 shadow-none rounded-none border-[1px]  flex items-center justify-center bg-[#E0DFD6] hover:bg-[#D1D0C8]">
          Сортировка
          <FilterIcons />
        </button>
        <button className="gap-[1.5px] rounded-[2px] ml-auto text-[#767671]  py-[5px] px-[12px] text-[16px] border-[#CBCBC1] border  leading-[19px] bg-[#E0DFD6] flex items-center justify-center">
          <EditIcons color={"#767671"} />
          Изменить
        </button>
        <button className="gap-[1.5px] rounded-[2px] text-[#767671] ml-1 py-[5px] px-[12px] text-[16px] border-[#CBCBC1] border  leading-[19px] bg-[#E0DFD6] flex items-center justify-center">
          <RemoveIcons />
          Убрать
        </button>
      </div>
      List
    </div>
  );
}
