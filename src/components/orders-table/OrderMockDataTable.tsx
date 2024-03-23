import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
// import { Pagination } from "../ui/pagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="flex grow flex-col overflow-hidden">
      <Table className="h-full">
        <TableHeader className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className="cursor-pointer border-none"
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className="h-16 py-2 text-left">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="h-full w-full">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                className="cursor-pointer border-none"
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="px-4 py-4 text-left">
                    <Link to={`/orders/${cell.id}`}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Link>
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-left">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="mt-auto flex items-center justify-between px-4 py-1">
        <div className="flex items-center">
          <span className="flex items-center space-x-1 text-xs text-gray-500">
            <div>Showing </div>
            <strong>
              {table.getState().pagination.pageIndex + 1} to{" "}
              {table.getPageCount()} of {table.getPageCount()} entries
            </strong>
          </span>
        </div>
        <div>
          <h1>Rows per page: {table.getPageCount()}</h1>
        </div>
        <div className="ml-4 flex items-center space-x-5">
          <button
            className="rounded p-1 text-sm text-[#B0A6A6]"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {"<<"}
          </button>
          <button
            className="rounded p-1 text-sm text-[#B0A6A6]"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button className="h-10 w-10 rounded-md bg-[#377DFF] text-white">
            {table.getState().pagination.pageIndex + 1}
          </button>
          <button
            className="rounded p-1 text-sm text-[#B0A6A6]"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
          <button
            className="rounded p-1 text-sm text-[#B0A6A6]"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
}
