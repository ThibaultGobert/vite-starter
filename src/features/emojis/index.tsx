import { CustomBarChart } from "@/components/charts/custom-bar-chart";
import EmojiList from "./components/emoji-list";
import useEmojiStore from "@/store/emoji-store";

const Emojis = () => {
  const emojiCount = useEmojiStore((state) => state.emojiCount);

  const chartData = Object.entries(emojiCount).map(([emoji, count]) => ({
    emoji,
    count,
  }));

  return (
    <div className="flex flex-col gap-4">
      <EmojiList />
      <CustomBarChart data={chartData} />
    </div>
  );
};

export default Emojis;
