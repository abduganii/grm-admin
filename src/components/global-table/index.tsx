import { Table } from "@tanstack/react-table";

import { LeftIcons, RightIcons } from "@/components/icons";
import { PaginationState } from "@/type";

import { Button } from "../ui/button";

type GlobalTableProps<TData> = {
  table: Table<TData>;
  totalPages: number;
  pagination: PaginationState;
  onClickItems?: (item: TData) => void;
};

export default function GlobalTable<TData>({
  table,
  totalPages,
  pagination,
  onClickItems,
}: GlobalTableProps<TData>) {
  return (
    <div className="p-4 w-full">
      <table className="w-full ">
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
        <tbody className="w-full bg-[#E0DFD6] rounded-[3px] border border-[#C3C3BB]">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              onClick={
                onClickItems ? () => onClickItems(row?.original) : () => {}
              }
              className={`${onClickItems ? "cursor-pointer hover:bg-[#D1D0C8] " : ""} duration-200  ease-in border-b min-h-[40px] border-[#C3C3BB]`}
            >
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
          className="border-[#D1D0C8] shadow-none rounded-none border-[1px] w-[36px] h-[36px] flex items-center justify-center bg-[#E0DFD6] hover:bg-[#D1D0C8]"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <LeftIcons />
        </Button>
        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index}
            className={`border-[#D1D0C8] shadow-none text-black rounded-none border-[1px] w-[36px] h-[36px] flex items-center justify-center 
             ${pagination.pageIndex === index ? "bg-black text-white" : "bg-[#E0DFD6] hover:bg-[#D1D0C8]"}`}
            onClick={() => table.setPageIndex(index)}
          >
            {index + 1}
          </Button>
        ))}
        <Button
          className="border-[#D1D0C8] shadow-none rounded-none border-[1px] w-[36px] h-[36px] flex items-center justify-center bg-[#E0DFD6] hover:bg-[#D1D0C8]"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <RightIcons />
        </Button>
      </div>
    </div>
  );
}
