import { IFilterDialogRow } from "@/components/filter-dialog/FilterTableColDef";
import { getRandomElementFromArray } from "./utils";

export const mockFilterTableData: IFilterDialogRow[] = Array.from(
  {
    length: 100,
  },
  (_) => ({
    id: "",
    machinename: getRandomElementFromArray([
      "Aahaar Stall 10 (MI102)",
      "Aahaar Stall 7 (MI103)",
      "Aahaar Stall 6 (MI104)",
      "Aahaar Stall 5 (MI104)",
      "Aahaar Stall 4 (MI104)",
      "Aahaar Stall 3 (MI104)",
      "Aahaar Stall 2 (MI104)",
    ]),
    address: getRandomElementFromArray([
      "Aahaar Stall 10, Pragati Maidan, New Delhi",
      "Aahaar Stall 7, Pragati Maidan, New Delhi",
      "Aahaar Stall 6, Pragati Maidan, New Delhi",
      "Aahaar Stall 5, Pragati Maidan, New Delhi",
      "Aahaar Stall 4, Pragati Maidan, New Delhi",
      "Aahaar Stall 3, Pragati Maidan, New Delhi",
      "Aahaar Stall 2, Pragati Maidan, New Delhi",
    ]),
  }),
);
