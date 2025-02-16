import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

import FilterSite from "@/components/filter-site";
import GlobalTable from "@/components/global-table";
import { DoteIcons } from "@/components/icons";
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
    <>
      <TopSite />
      <FilterSite />
      <GlobalTable
        totalPages={totalPages}
        table={table}
        pagination={pagination}
      />
    </>
  );
}
