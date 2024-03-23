import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import BananaImg from '@/assets/bananapng.png'

export interface IFilterDialogRow {
  id: string;
  machinename: string;
  address: string;
}

export const filterTableDialogColumns: ColumnDef<IFilterDialogRow>[] = [
  {
    accessorKey: "id",
    header: () => (
      <div className="flex items-center text-base text-[#377DFF]">
        <Checkbox />
      </div>
    ),
    cell: () => {
      return (
        <span className="flex items-center justify-center text-sm font-normal leading-5 lg:-ml-4">
          <Checkbox />
        </span>
      );
    },
  },
  {
    accessorKey: "machinename",
    header: () => (
      <div className="text-left text-base text-[#377DFF]">
        <h1 className="uppercase">Machine Name</h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue: string = row.getValue("machinename");
      return (
        <div className="flex items-center justify-center space-x-4 px-2 lg:-ml-2">
          <img src={BananaImg} />
          <span className="text-sm font-normal leading-5">{colValue}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "address",
    header: () => (
      <div className="text-left text-base text-[#377DFF]">
        <h1>ADDRESS</h1>
      </div>
    ),
    cell: ({ row }) => {
      const colValue: string = row.getValue("address");
      return (
        <div className="flex items-center justify-center space-x-2 px-2 lg:-ml-2">
          <span className="text-sm font-normal leading-5">{colValue}</span>
        </div>
      );
    },
  },
];
