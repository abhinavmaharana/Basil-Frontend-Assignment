import FilterDialog from "@/components/filter-dialog/FilterDialog";
import ExcelExportIcon from "@/components/icons/ExcelExportIcon";
import SaveAsPDFIcon from "@/components/icons/SaveAsPDFIcon";
import { DataTable } from "@/components/orders-table/OrderMockDataTable";
import {
  IOrderTableRow,
  orderTableColumns,
} from "@/components/orders-table/OrderTableColDef";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { mockOrderTableData } from "@/lib/mockOrderTableData";
import { SearchIcon, X } from "lucide-react";
import { useMemo } from "react";

export default function OrdersPage() {
  const columns = useMemo(() => orderTableColumns, []);
  const data: IOrderTableRow[] = mockOrderTableData;
  return (
    <div className="space-y-4 p-6">
      <Navbar title="All Orders" subTitle="All Orders" />
      <div className="flex items-center justify-between">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            value=""
            className="focus:outline-buttonprimary w-72 rounded-xl border border-gray-300 px-4 py-3 pl-10"
          />
          <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="rounded-lg border-2 border-[#ADB5BD] p-3 shadow-lg">
            <ExcelExportIcon />
          </div>
          <div className="rounded-lg border-2 border-[#ADB5BD] p-3 shadow-lg">
            <SaveAsPDFIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 lg:flex-row lg:gap-x-5">
        <div className="flex-grow">
          <div className="rounded-lg bg-white shadow-md">
            <div className="px-2 py-5 lg:p-5">
              <div className="grid grid-cols-3 items-center justify-between gap-y-2 text-sm text-[#333333] lg:grid-cols-6 lg:text-lg">
                <h1>Machines: 6</h1>
                <h1>Orders: 28</h1>
                <h1>Customers: 28</h1>
                <h1>Drinks: 28</h1>
                <h1>Total Amount: ₹ 25999</h1>
                <h1>Refunds Initiated: 3</h1>
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-lg bg-white shadow-md">
            <div className="p-5">
              <div className="flex items-center justify-between text-[#333333]">
                <DataTable columns={columns} data={data} />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="rounded-lg bg-white shadow-md">
            <div className="p-5">
              <div className="flex items-center">
                <div className="space-y-5">
                  <h1 className="text-center text-lg font-bold uppercase text-[#5D6679]">
                    Filter
                  </h1>
                  <div className="flex items-center space-x-64 lg:space-x-72">
                    <FilterDialog>
                      <Button
                        variant="outline"
                        className="rounded-lg border-2 text-[#5D6679]"
                      >
                        Select Filters
                      </Button>
                    </FilterDialog>
                    <h1 className="text-[#5D6679] underline underline-offset-4">
                      Clear All
                    </h1>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-center space-x-2">
                      <h1 className="text-[#5D6679]">Date From:</h1>
                      <div>
                        <Button className="rounded-full border-2 bg-transparent text-[#5D6679]">
                          <div className="flex items-center">
                            <p>21/03/2022</p>
                            <X className="w-12" />
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <h1 className="text-[#5D6679]">Date To:</h1>
                      <div>
                        <Button className="rounded-full border-2 bg-transparent text-[#5D6679]">
                          <div className="flex items-center">
                            <p>21/03/2022</p>
                            <X className="w-12" />
                          </div>
                        </Button>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <h1 className="text-[#5D6679]">Status:</h1>
                      <div className="space-y-2">
                        <div className="grid w-72 grid-cols-2 gap-x-2">
                          <Button className="w-36 rounded-full border-2 bg-transparent text-[#5D6679]">
                            <div className="flex items-center">
                              <p>Success</p>
                              <X className="w-12" />
                            </div>
                          </Button>
                          <Button className="w-36 rounded-full border-2 bg-transparent text-[#5D6679]">
                            <div className="flex items-center">
                              <p>Failure</p>
                              <X className="w-12" />
                            </div>
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-x-2">
                          <Button className="w-36 rounded-full border-2 bg-transparent text-[#5D6679]">
                            <div className="flex items-center">
                              <p>Pending</p>
                              <X className="w-12" />
                            </div>
                          </Button>
                          <Button className="-ml-12 rounded-full border-2 bg-transparent text-[#5D6679] lg:-ml-8">
                            <div className="flex items-center">
                              <p>Refund Completed</p>
                              <X className="w-12" />
                            </div>
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-x-2">
                          <Button className="rounded-full border-2 bg-transparent text-[#5D6679]">
                            <div className="flex items-center">
                              <p>Refund Initiated</p>
                              <X className="w-12" />
                            </div>
                          </Button>
                          <Button className="w-36 rounded-full border-2 bg-transparent text-[#5D6679]">
                            <div className="flex items-center">
                              <p>Sent</p>
                              <X className="w-12" />
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <h1 className="text-[#5D6679]">Machines:</h1>
                      <div className="space-y-2">
                        <div className="grid grid-cols-1 gap-x-2">
                          <Button className="w-48 rounded-full border-2 bg-transparent text-[#5D6679]">
                            <div className="flex items-center">
                              <p>Aahaar Stall 23</p>
                              <X className="w-12" />
                            </div>
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-x-2">
                          <Button className=" rounded-full border-2 bg-transparent text-[#5D6679]">
                            <div className="flex items-center">
                              <p>Aahaar Stall 37</p>
                              <X className="w-12" />
                            </div>
                          </Button>
                          <Button className=" rounded-full border-2 bg-transparent text-[#5D6679]">
                            <div className="flex items-center">
                              <p>Aahaar Stall 88</p>
                              <X className="w-12" />
                            </div>
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex-end text-right">
                      <h1 className="text-[#5D6679] underline underline-offset-4">
                        see more
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
