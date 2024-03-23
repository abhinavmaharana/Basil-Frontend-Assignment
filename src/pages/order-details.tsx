import ExcelExportIcon from "@/components/icons/ExcelExportIcon";
import SaveAsPDFIcon from "@/components/icons/SaveAsPDFIcon";
import Navbar from "@/components/shared/navbar";
import { Button } from "@/components/ui/button";
import { Undo } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
// import { OrderDetailsMockData } from "@/components/orders-details-table/OrderDetailsMockDataTable";
// import { IOrderDetailsTableRow, orderDetailsTableColumns } from "@/components/orders-details-table/OrderDetailTableColDef";
// import { mockOrderDetailsTableData } from "@/lib/mockOrderDetailsTableData";

const drinks = [
  {
    id: "C101",
    name: "Mix Berry Smoothie",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b037597b48d10c2a43d7394d3607926ed4b4a9aa15cf996f7b44b3f6ce55e6fd?apiKey=ff29eb85e7464976a6d2464dcda446db&",
    customization: "Low Honey",
    amount: 199,
    status: "SUCCESS",
  },
  {
    id: "C010",
    name: "Blueberry Fruit Punch",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/82eb1bc08909ce229d9624daea33e1b2a98692c09e23cf1f41efb801ceadf772?apiKey=ff29eb85e7464976a6d2464dcda446db&",
    customization: "Low Honey",
    amount: 199,
    status: "REFUND INITIATED",
  },
  {
    id: "C101",
    name: "Pineapple Mojito",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4f23ae006ca660259b15583e25ebcc155f4e77d63c2dcc94e4ab22b51a082304?apiKey=ff29eb85e7464976a6d2464dcda446db&",
    customization: "Low Honey",
    amount: 199,
    status: "REFUND COMPLETED",
  },
  {
    id: "C101",
    name: "Mint Lemonade",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8e20e253927752c40f4b32fc75f5c0932b097fe677004edc50af5a422451b201?apiKey=ff29eb85e7464976a6d2464dcda446db&",
    customization: "Low Honey",
    amount: 199,
    status: "SUCCESS",
  },
];

interface DrinkItemProps {}

const OrderDetailsPage: React.FC<DrinkItemProps> = ({}) => {
  // const columns = useMemo(() => orderDetailsTableColumns, [])
  // const data: IOrderDetailsTableRow[] = mockOrderDetailsTableData;

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "SUCCESS":
        return "text-[#53A450] border border-[#53A450] px-6 py-2 w-28 rounded-full";
      case "REFUND INITIATED":
        return "text-[#5053A4] border border-[#5053A4] px-6 py-2 w-44 rounded-full";
      case "REFUND COMPLETED":
        return "text-[#9D50A4] border border-[#9D50A4] px-6 py-2 w-52 rounded-full";
      default:
        return "";
    }
  };

  const handleRefund = (index: number) => {
    // Handle refund logic for the drink at the given index
    console.log(`Refund initiated for drink at index ${index}`);
  };
  return (
    <div className="space-y-5 p-6">
      <Navbar title="OD101" subTitle="All Orders / OD101" />
      <div className="flex items-center justify-between">
        <div className=""></div>
        <div className="flex items-center space-x-4">
          <div>
            <Button className="space-x-2 bg-[#377DFF] px-16 py-6 text-white">
              <Undo />
              <p>Refund Complete Order</p>
            </Button>
          </div>
          <div className="rounded-lg border-2 border-[#ADB5BD] p-3 shadow-lg">
            <ExcelExportIcon />
          </div>
          <div className="rounded-lg border-2 border-[#ADB5BD] p-3 shadow-lg">
            <SaveAsPDFIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
        <div className="flex-shrink">
          <div className="rounded-lg bg-white shadow-md">
            <div className="p-5">
              <div className="flex items-center">
                <div className="space-y-8">
                  <div className="flex items-center space-x-64">
                    <h1 className="text-center text-lg font-bold uppercase text-[#5D6679]">
                      OD101
                    </h1>
                    <span className="flex items-center justify-center rounded-full border border-[#53A450] px-6 py-1 text-sm font-normal leading-5 text-[#53A450]">
                      SUCESS
                    </span>
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-[#868E96]">BASIC INFORMATION</h1>
                    <div className="grid grid-cols-2 items-center gap-x-10">
                      <div className="space-y-2">
                        <h1 className="text-[#868E96]">Date and Time</h1>
                        <p>21 / 03 / 2023 ; 13:58:21 PM</p>
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-[#868E96]">Machine</h1>
                        <p>
                          Aahaar Stall 3{" "}
                          <span className="text-[#868E96]">(WH101)</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-[#868E96]">ORDER SUMMARY</h1>
                    <div className="grid grid-cols-2 items-center gap-x-10">
                      <div className="space-y-2">
                        <h1 className="text-[#868E96]">Payment ID</h1>
                        <p>TX1042480129481</p>
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-[#868E96]">Total Amount</h1>
                        <p>₹ 796</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-[#868E96]">CUSTOMER INFORMATION</h1>
                    <div className="grid grid-cols-2 items-center gap-x-10 gap-y-4">
                      <div className="space-y-2">
                        <h1 className="text-[#868E96]">Name</h1>
                        <p>Simranjeet Kaur</p>
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-[#868E96]">Contact Number</h1>
                        <p>9999999999</p>
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-[#868E96]">Email</h1>
                        <p>simranjeet.kaur@basil.health</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-[#868E96]">REFUND INFORMATION</h1>
                    <div className="grid grid-cols-2 items-center gap-x-10 gap-y-4">
                      <div className="space-y-2">
                        <h1 className="text-[#868E96]">
                          Refund Transaction ID
                        </h1>
                        <p>TX1042480129481</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <div className="rounded-lg bg-white shadow-md">
            <div className="p-5">
              <div className="flex items-center">
                <div className="space-y-5">
                  <div className="text-left text-lg font-bold uppercase text-[#5D6679]">
                    <h1>ORDER DETAILS</h1>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex grow flex-col overflow-hidden">
                <Table className="lg:w-[1300px] ">
                  <TableHeader className="">
                    <TableRow className="border-none">
                      <TableHead className="lg:text-md text-xs font-bold leading-6 tracking-wider text-blue-500">
                        ID
                      </TableHead>
                      <TableHead className="lg:text-md text-xs font-bold leading-6 tracking-wider text-blue-500">
                        DRINK NAME
                      </TableHead>
                      <TableHead className="lg:text-md text-xs font-bold leading-6 tracking-wider text-blue-500">
                        CUSTOMISATION
                      </TableHead>
                      <TableHead className="lg:text-md text-xs font-bold leading-6 tracking-wider text-blue-500">
                        AMOUNT
                      </TableHead>
                      <TableHead className="lg:text-md text-xs font-bold leading-6 tracking-wider text-blue-500">
                        DRINK STATUS
                      </TableHead>
                      <TableHead className="lg:text-md text-xs font-bold leading-6 tracking-wider text-blue-500">
                        ACTION
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {drinks.map((drink) => (
                      <TableRow key={drink.id} className="border-none">
                        <TableCell className="lg:text-lg">{drink.id}</TableCell>
                        <TableCell className="">
                          <div className="flex items-center space-x-4">
                            <img src={drink.image} className="w-10" />
                            <h1 className="lg:text-lg">{drink.name}</h1>
                          </div>
                        </TableCell>
                        <TableCell className="lg:text-lg ">
                          {drink.customization}
                        </TableCell>
                        <TableCell className="lg:text-lg ">
                          ₹ {drink.amount}
                        </TableCell>
                        <TableCell>
                          <p
                            className={`text-md flex items-center font-normal leading-5 ${getStatusStyle(drink.status)}`}
                          >
                            {drink.status}
                          </p>
                        </TableCell>
                        <TableCell className="">
                          <Button
                            className={`justify-center rounded-lg px-5 py-px lg:text-lg ${
                              drink.status !== "SUCCESS"
                                ? "bg-zinc-400"
                                : "bg-blue-500"
                            }`}
                            disabled={drink.status !== "SUCCESS"}
                            onClick={() => handleRefund(drink.amount)}
                          >
                            Refund
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              {/* <div className="flex">
                <OrderDetailsMockData columns={columns} data={data} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
