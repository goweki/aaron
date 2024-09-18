"use client";

import { useState } from "react";
// import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

// const data = [
//   {
//     name: "Jan",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Feb",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Mar",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Apr",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "May",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Jun",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Jul",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Aug",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Sep",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Oct",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Nov",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Dec",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
// ];

// export function Chart1() {
//   return (
//     <ResponsiveContainer width="100%" height={350}>
//       <BarChart data={data}>
//         <XAxis
//           dataKey="name"
//           stroke="#888888"
//           fontSize={12}
//           tickLine={false}
//           axisLine={false}
//         />
//         <YAxis
//           stroke="#888888"
//           fontSize={12}
//           tickLine={false}
//           axisLine={false}
//           tickFormatter={(value) => `$${value}`}
//         />
//         <Bar
//           dataKey="total"
//           fill="currentColor"
//           radius={[4, 4, 0, 0]}
//           className="fill-primary"
//         />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// }

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chart_data = [
  {
    name: "Jan",
    trackA: 14,
    trackB: 10,
    trackC: 4,
    trackD: 2,
  },
  {
    name: "Feb",
    trackA: 10,
    trackB: 9,
    trackC: 5,
    trackD: 3,
  },
  {
    name: "March",
    trackA: 9,
    trackB: 12,
    trackC: 3,
    trackD: 1,
  },
  {
    name: "April",
    trackA: 11,
    trackB: 11,
    trackC: 6,
    trackD: 4,
  },
  {
    name: "May",
    trackA: 11,
    trackB: 12,
    trackC: 6,
    trackD: 2,
  },
  {
    name: "June",
    trackA: 13,
    trackB: 9,
    trackC: 2,
    trackD: 4,
  },
  {
    name: "July",
    trackA: 11,
    trackB: 10,
    trackC: 4,
    trackD: 5,
  },
];

export default function SimpleLineChart() {
  const [data, setData] = useState(chart_data);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip wrapperStyle={{ backgroundColor: "#020917" }} /> */}
        <Tooltip
          // wrapperStyle={{ backgroundColor: "#020917" }}
          contentStyle={{ backgroundColor: "hsl(var(--popover))" }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="trackA"
          activeDot={{ r: 6 }}
          stroke="hsl(var(--chart-1))"
        />
        <Line
          type="monotone"
          dataKey="trackB"
          activeDot={{ r: 6 }}
          stroke="hsl(var(--chart-2))"
        />
        <Line
          type="monotone"
          dataKey="trackC"
          activeDot={{ r: 6 }}
          stroke="hsl(var(--chart-3))"
        />
        <Line
          type="monotone"
          dataKey="trackD"
          activeDot={{ r: 6 }}
          stroke="hsl(var(--chart-4))"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
