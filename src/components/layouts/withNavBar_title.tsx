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
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          {/* <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div> */}
        </div>
        {children}
      </div>
    </WithNavLayout>
  );
}
