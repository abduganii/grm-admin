import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import FilterSite from "@/components/filter-site";
import FormModal from "@/components/form-modal";
import GloabalInput from "@/components/global-input";
import GlobalTable from "@/components/global-table";
import { BusketIcons, DoteIcons } from "@/components/icons";
import TopSite from "@/components/top-site";
import { PaginationState } from "@/type";

import { Product } from "./type";

const data: Product[] = [
  {
    id: 1,
    image: ["/image.png"],
    barcode: "234472932",
    collection: "Elexus Kalipso",
    model: "A9230",
    color: "Кремовая",
    style: "Классик",
    shape: "Прямоугольный",
    size: "200X300",
    quantity: 12,
    branch: "3 - Филиалах",
    price: 12,
    total: 380000,
  },
  {
    id: 2,
    image: ["/image.png"],
    barcode: "234472933",
    collection: "Elexus Kalipso",
    model: "A9231",
    color: "Белая",
    style: "Классик",
    shape: "Прямоугольный",
    size: "200X300",
    quantity: 12,
    branch: "3 - Филиалах",
    price: 12,
    total: 380000,
  },
  {
    id: 3,
    image: ["/image.png"],
    barcode: "234472934",
    collection: "Elexus Kalipso",
    model: "A9232",
    color: "Серая",
    style: "Классик",
    shape: "Прямоугольный",
    size: "200X300",
    quantity: 12,
    branch: "3 - Филиалах",
    price: 12,
    total: 380000,
  },
];

export default function Page() {
  const [open, setOpen] = useState<boolean>(false);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 2,
  });

  const table = useReactTable({
    data,
    columns: [
      {
        accessorKey: "image",
        header: "image",
        accessorFn: (row) => (
          <div className="text-end cursor-pointer">
            <img src={row?.image[0]} />
          </div>
        ),
      },
      { accessorKey: "barcode", header: "Баркод" },
      { accessorKey: "collection", header: "Коллекция" },
      { accessorKey: "model", header: "Модель" },
      { accessorKey: "color", header: "Цвет" },
      { accessorKey: "price", header: "Цена" },
      {
        accessorKey: "action",
        accessorFn: () => (
          <div className="flex items-center justify-end">
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-1 justify-center py-[9px] px-[19px] bg-[#D6D6CD] broder  border-[#D1D0C8]"
            >
              <BusketIcons />
              Опубликовать
            </button>
            <div className="text-end cursor-pointer">
              <DoteIcons />
            </div>
          </div>
        ),
      },
    ],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination },
    onPaginationChange: setPagination,
  });
  const totalPages = table.getPageCount();
  return (
    <>
      <TopSite />
      <FilterSite />
      <GlobalTable
        totalPages={totalPages}
        table={table}
        pagination={pagination}
      />

      {open ? (
        <FormModal title={"Публикация продукта"} onClose={() => setOpen(false)}>
          <div className="w-full flex gap-3 flex-wrap">
            <GloabalInput
              className="colm1"
              placeholder="name"
              label="name"
              typeValue="textarea"
            />
            <GloabalInput
              className="colm1"
              placeholder="name"
              label="name"
              typeValue="textarea"
            />
            <GloabalInput
              className="colm2"
              placeholder="name"
              label="name"
              typeValue="input"
            />
            <GloabalInput
              className="colm2"
              placeholder="name"
              label="name"
              typeValue="input"
            />
            <GloabalInput
              className="colm2"
              placeholder="name"
              label="name"
              typeValue="input"
            />
            <GloabalInput
              className="colm2"
              placeholder="name"
              label="name"
              typeValue="input"
            />
            <GloabalInput
              className="colm2"
              placeholder="name"
              label="name"
              typeValue="input"
            />
            <GloabalInput
              className="colm2"
              placeholder="name"
              label="name"
              typeValue="input"
            />
          </div>
          <div className="mt-9 flex gap-2">
            <button className="gap-[1.5px] ml-1 py-[14px] px-[16px] text-[16px] leading-[19px] text-[#E0DFD6] bg-[#212121]  flex items-center justify-center">
              Толька сохранить
            </button>
            <button className="gap-[1.5px] ml-1 py-[14px] px-[16px] text-[16px] leading-[19px] bg-[#D7FE62] flex items-center justify-center">
              Сохранить и опубликовать
            </button>
          </div>
        </FormModal>
      ) : (
        ""
      )}
    </>
  );
}
