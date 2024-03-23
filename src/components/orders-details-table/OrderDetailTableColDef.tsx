import { ColumnDef } from "@tanstack/react-table";

export interface IOrderDetailsTableRow {
  id: string;
  name: string;
  image: string;
  customization: string;
  amount: string;
  status: string;
}

export const orderDetailsTableColumns: ColumnDef<IOrderDetailsTableRow>[] = [
  {
    accessorKey: "id",
    header: () => (
      <div className="text-base text-[#377DFF]">
        <h1>ID</h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue: string = row.getValue("id");
      return (
        <span className="flex items-center justify-center px-2 text-sm font-normal leading-5 lg:-ml-4">
          {colValue}
        </span>
      );
    },
  },
  {
    accessorKey: "name",
    header: () => (
      <div className="text-base text-[#377DFF]">
        <h1>DRINK NAME</h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue: string = row.getValue("name");
      const colValue1: string = row.getValue("image");

      return (
        <div className="flex items-center justify-center px-2 text-sm font-normal leading-5 lg:-ml-4">
          <img src={colValue1} className="w-10" />
          <p>{colValue}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "customization",
    header: () => (
      <div className="text-base text-[#377DFF]">
        <h1>CUSTOMISATION</h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue: string = row.getValue("customization");
      return (
        <span className="flex items-center justify-center px-2 text-sm font-normal leading-5 lg:-ml-4">
          {colValue}
        </span>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => (
      <div className="text-base text-[#377DFF]">
        <h1>AMOUNT</h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue: string = row.getValue("amount");
      return (
        <span className="flex items-center justify-center px-2 text-sm font-normal leading-5 lg:-ml-4">
          {colValue}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <span className="text-base text-[#377DFF]">Status</span>,
    cell: ({ row }) => {
      const colValue: string = row.getValue("status");

      let messageColor = "";
      if (colValue === "SUCESS") {
        messageColor =
          "text-[#53A450] border border-[#53A450] px-6 py-2 rounded-full";
      } else if (colValue === "FAILURE") {
        messageColor =
          "text-[#FF5630] border border-[#FF5630] px-6 py-2 rounded-full";
      } else if (colValue === "PENDING") {
        messageColor =
          "text-[#E2D900] border border-[#E2D900] px-6 py-2 rounded-full";
      } else if (colValue === "SENT") {
        messageColor =
          "text-[#E28800] border border-[#E28800] px-6 py-2 rounded-full";
      } else if (colValue === "REFUND INITIATED") {
        messageColor =
          "text-[#5053A4] border border-[#5053A4] px-6 py-2 rounded-full";
      } else if (colValue === "REFUND COMPLETED") {
        messageColor =
          "text-[#9D50A4] border border-[#9D50A4] px-6 py-2 rounded-full";
      }

      return (
        <div className="flex items-center space-x-4">
          <span
            className={`${messageColor} flex items-center justify-center text-sm font-normal leading-5`}
          >
            {colValue}
          </span>
        </div>
      );
    },
  },
];
