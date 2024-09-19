import Navbar from "../menubars";
import { CalendarDateRangePicker } from "../mols/date-range-picker";
import { Button } from "../ui/button";
import WithNavLayout from "./withNavBar";

export default function WithTitleLayout({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <WithNavLayout>
      <div className="sm:hidden w-full h-full flex">
        <div className="flex flex-col flex-1 my-8">
          <span className="inline-block m-auto italic text-sm text-center">
            Please use a wider screen for better viewing
          </span>
        </div>
      </div>
      <div className="hidden sm:flex flex-col flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        </div>
        {children}
      </div>
    </WithNavLayout>
  );
}
