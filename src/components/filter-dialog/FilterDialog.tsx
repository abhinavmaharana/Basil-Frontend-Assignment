import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SearchIcon } from "lucide-react";
import SuccessIcon from "@/assets/success.png";
import PendingIcon from "@/assets/pending.png";
import SentIcon from "@/assets/sent.png";
import FailureIcon from "@/assets/stop.png";
import RefundInitiatedIcon from "@/assets/refundinitiated.png";
import RefundCompletedIcon from "@/assets/refund.png";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface IProps {
  children: ReactNode;
}

export default function FilterDialog(props: IProps) {
  const { children } = props;

  const [state] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-screen-lg pb-16 pl-16 pr-16 pt-12">
        <form className="space-y-10">
          <DialogHeader className="flex items-center">
            <DialogTitle className="font-semibold uppercase">
              Filter
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value=""
                className="focus:outline-buttonprimary w-full rounded-xl border border-gray-300 px-4 py-3 pl-10"
              />
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
            </div>
            <div className="rounded-lg border-2 bg-white shadow-md">
              <div className="p-5">
                <h1>Machine</h1>
              </div>
            </div>
            <div className="space-y-3">
              <h1>Status</h1>
              <div className="grid grid-cols-5 gap-x-2 gap-y-4">
                <Button className="h-32 w-32 rounded-lg border-2 border-black bg-white hover:bg-white">
                  <div className="space-y-2 text-left text-black">
                    <img src={SuccessIcon} />
                    <h1>Successful</h1>
                  </div>
                </Button>
                <Button className="h-32 w-32 rounded-lg border-2 bg-white hover:bg-white">
                  <div className="space-y-2 text-left text-black">
                    <img src={PendingIcon} />
                    <h1>Pending</h1>
                  </div>
                </Button>
                <Button className="h-32 w-32 rounded-lg border-2 bg-white hover:bg-white">
                  <div className="space-y-2 text-left text-black">
                    <img src={SentIcon} />
                    <h1>Sent</h1>
                  </div>
                </Button>
                <Button className="h-32 w-32 rounded-lg border-2 bg-white hover:bg-white">
                  <div className="space-y-2 text-left text-black">
                    <img src={FailureIcon} />
                    <h1>Failure</h1>
                  </div>
                </Button>
                <Button className="h-32 w-32 rounded-lg border-2 bg-white hover:bg-white">
                  <div className="space-y-2 text-left text-black">
                    <img src={RefundInitiatedIcon} />
                    <h1>
                      Refund <br /> Initiated
                    </h1>
                  </div>
                </Button>
                <Button className="h-32 w-32 rounded-lg border-2 bg-white hover:bg-white">
                  <div className="space-y-2 text-left text-black">
                    <img src={RefundCompletedIcon} />
                    <h1 className="">
                      Refund <br /> Completed
                    </h1>
                  </div>
                </Button>
              </div>
            </div>
            <div className="space-y-5">
              <h1>Date Range</h1>
              <div className="flex flex-col col-span-3 mx-auto border-2 rounded-xl">
                <DateRangePicker
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={state}
                  rangeColors={['#333333']}
                  direction="horizontal"
                />
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <DialogFooter className="flex items-center justify-between">
            <Button className="">Clear All</Button>
            <Button>Apply</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
