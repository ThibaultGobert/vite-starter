import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { type ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  emoji: {
    label: "Emoji",
    color: "#2563eb",
  },
  count: {
    label: "Count",
    color: "#10b981",
  },
} satisfies ChartConfig;

type EmojiData = {
  emoji: string;
  count: number;
};

export const CustomBarChart = ({ data }: { data: EmojiData[] }) => {
  console.log("CustomBarChart data:", data);
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart data={data}>
        <XAxis
          dataKey="emoji"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          dataKey="count"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="count" fill="#2563eb" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};
