import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import { DoteIcons, LeftIcons, RightIcons } from "@/components/icons";
import { Button } from "@/components/ui/button";

import { PaginationState, Product } from "./type";

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

export default function Table() {
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
          <div className="text-end cursor-pointer">
            <DoteIcons />
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
    <div className="p-4 w-full">
      <table className="w-full">
        <thead className="w-full">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="py-[14px] text-[14px] leading-[16px] text-[#212121] opacity-40 font-normal px-2 text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : (header.column.columnDef.header as string)}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="w-full bg-[#E0DFD6]  border border-[#C3C3BB]">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-2 text-[14px] leading-[16px] text-[#212121]"
                >
                  {cell.renderValue() as string}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-[10px] mt-4">
        <Button
          className="border-[#D1D0C8] rounded-none border-[1px] w-[36px] h-[36px] felx items-center justify-center bg-[#E0DFD6] hover:bg-[#D1D0C8]"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <LeftIcons />
        </Button>
        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index}
            className={`border-[#D1D0C8] rounded-none border-[1px] w-[36px] h-[36px] felx items-center justify-center 
               ${pagination.pageIndex === index ? "bg-black" : "bg-[#E0DFD6] hover:bg-[#D1D0C8]"}`}
            onClick={() => table.setPageIndex(index)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          className="border-[#D1D0C8] rounded-none border-[1px] w-[36px] h-[36px] felx items-center justify-center bg-[#E0DFD6] hover:bg-[#D1D0C8]"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <RightIcons />
        </Button>
      </div>
    </div>
  );
}
