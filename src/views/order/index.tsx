import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FilterSite from "@/components/filter-site";
import GlobalTable from "@/components/global-table";
import { DoteIcons, NoteSmsIcons } from "@/components/icons";
import TopSite from "@/components/top-site";
import { PaginationState } from "@/type";

import { IDAta } from "./type";

const data: IDAta[] = [
  {
    id: 10,
    date: "12.02.2025 10:47",
    buyer: "Аббос Жанизаков",
    phone: "+94 609-34-44",
    price: "7 690 000 сум",
    paymentType: "Наличные",
    paymentStatus: "Не оплачена",
    paidAmount: "0 сум",
    promoCode: "нет",
    discount: "700 000",
    status: "В обработке",
    notes: "3 note",
  },
  {
    id: 9,
    date: "12.02.2025 10:47",
    buyer: "Аббос Жанизаков",
    phone: "+94 609-34-44",
    price: "7 690 000 сум",
    paymentType: "Наличные",
    paymentStatus: "Не оплачена",
    paidAmount: "0 сум",
    promoCode: "нет",
    discount: "0 %",
    status: "В обработке",
    notes: "3 note",
  },
  {
    id: 8,
    date: "12.02.2025 10:47",
    buyer: "Аббос Жанизаков",
    phone: "+94 609-34-44",
    price: "7 690 000 сум",
    paymentType: "Наличные",
    paymentStatus: "Не оплачена",
    paidAmount: "0 сум",
    promoCode: "нет",
    discount: "300 000",
    status: "В обработке",
    notes: "3 note",
  },
  {
    id: 7,
    date: "12.02.2025 10:47",
    buyer: "Аббос Жанизаков",
    phone: "+94 609-34-44",
    price: "7 690 000 сум",
    paymentType: "Наличные",
    paymentStatus: "Не оплачена",
    paidAmount: "0 сум",
    promoCode: "нет",
    discount: "2 000 000",
    status: "В обработке",
    notes: "3 note",
  },
  {
    id: 6,
    date: "12.02.2025 10:47",
    buyer: "Аббос Жанизаков",
    phone: "+94 609-34-44",
    price: "7 690 000 сум",
    paymentType: "Наличные",
    paymentStatus: "Не оплачена",
    paidAmount: "0 сум",
    promoCode: "нет",
    discount: "0 %",
    status: "В обработке",
    notes: "3 note",
  },
];

export default function Page() {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  const navigate = useNavigate();
  const table = useReactTable({
    data,
    columns: [
      {
        accessorKey: "id",
        header: "Номер",
        accessorFn: (row) => (
          <div className="flex items-center">
            <span>№{row.id}</span>
          </div>
        ),
      },
      { accessorKey: "date", header: "Дата и время" },
      { accessorKey: "buyer", header: "Покупатель" },
      { accessorKey: "phone", header: "Номер покупателя" },
      { accessorKey: "price", header: "Стоимость заказа" },
      { accessorKey: "paymentType", header: "Тип оплаты" },
      {
        accessorKey: "paymentStatus",
        header: "Статус оплаты",
        accessorFn: (row) => (
          <select defaultValue={row.paymentStatus} className="py-[15px]">
            <option value="Не оплачена">Не оплачена</option>
            <option value="Оплачена">Оплачена</option>
          </select>
        ),
      },
      { accessorKey: "paidAmount", header: "Оплачено" },
      {
        accessorKey: "promoCode",
        header: "Промокод",
        accessorFn: (row) => (
          <p className="opacity-45 text-nowrap">{row.promoCode}</p>
        ),
      },
      {
        accessorKey: "discount",
        header: "Скидка",
        accessorFn: (row) => (
          <p className="opacity-45 text-nowrap">{row.discount}</p>
        ),
      },
      { accessorKey: "status", header: "Статус заказа" },
      {
        accessorKey: "notes",
        header: "Заметки",
        accessorFn: (row) => (
          <div className="text-end flex items-center gap-[2px] cursor-pointer">
            <NoteSmsIcons />
            <p className="opacity-45 text-nowrap">{row.notes}</p>
          </div>
        ),
      },
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
      <TopSite searchPlaceholder={"Поиск заказа по номеру ..."} />
      <FilterSite />
      <GlobalTable<IDAta>
        onClickItems={(e: IDAta) => navigate(`/order/${e?.id}/priew`)}
        totalPages={totalPages}
        table={table}
        pagination={pagination}
      />
    </>
  );
}
