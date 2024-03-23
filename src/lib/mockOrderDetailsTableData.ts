import { IOrderDetailsTableRow } from "@/components/orders-details-table/OrderDetailTableColDef";
import { getRandomElementFromArray } from "./utils";

export const mockOrderDetailsTableData: IOrderDetailsTableRow[] = Array.from(
  {
    length: 4,
  },
  (_) => ({
    id: getRandomElementFromArray(["C101", "C010", "C101", "C101"]),
    name: getRandomElementFromArray([
      "Mix Berry Smoothie",
      "Blueberry Fruit Punch",
      "Pineapple Mojito",
      "Mint Lemonade",
    ]),
    image: getRandomElementFromArray([
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b037597b48d10c2a43d7394d3607926ed4b4a9aa15cf996f7b44b3f6ce55e6fd?apiKey=ff29eb85e7464976a6d2464dcda446db&",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/82eb1bc08909ce229d9624daea33e1b2a98692c09e23cf1f41efb801ceadf772?apiKey=ff29eb85e7464976a6d2464dcda446db&",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4f23ae006ca660259b15583e25ebcc155f4e77d63c2dcc94e4ab22b51a082304?apiKey=ff29eb85e7464976a6d2464dcda446db&",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/8e20e253927752c40f4b32fc75f5c0932b097fe677004edc50af5a422451b201?apiKey=ff29eb85e7464976a6d2464dcda446db&",
    ]),
    customization: getRandomElementFromArray(["Low Honey"]),
    amount: getRandomElementFromArray(["₹ 199"]),
    status: getRandomElementFromArray([
      "SUCCESS",
      "REFUND INITIATED",
      "REFUND COMPLETED",
      "SUCCESS",
    ]),
  }),
);
