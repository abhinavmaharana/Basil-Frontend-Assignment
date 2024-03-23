import { BellDot, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarProps {
  title: string;
  subTitle: string;
}

const Navbar: React.FC<NavbarProps> = ({ title, subTitle }) => {
  return (
    <div className="h-30 rounded-b-lg bg-white shadow-md">
      <div className="-mt-5 p-5">
        <div className="flex justify-between">
          <div className="space-y-2">
            <h1 className="text-lg">{title}</h1>
            <p className="text-sm text-[#377DFF]">{subTitle}</p>
          </div>
          <div className="flex items-center justify-between space-x-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value=""
                className="focus:outline-buttonprimary rounded-xl border border-gray-300 py-3 pl-10 lg:w-60 lg:px-4 lg:py-4 lg:pl-10"
              />
              <SearchIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400 lg:left-3" />
            </div>
            <BellDot className="w-12" />
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
