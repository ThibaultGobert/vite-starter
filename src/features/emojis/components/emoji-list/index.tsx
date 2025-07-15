import { getEmojis } from "@/api/emojis/emoji-api";
import { useQuery } from "@tanstack/react-query";
import { decodeHtmlEntity } from "../../utils/emoji-utils";
import useEmojiStore from "@/store/emoji-store";
import type { EmojiCategory } from "@/types/emoji/emoji-type";

const EmojiList = () => {
  const { data } = useQuery({
    queryKey: ["emoji-list"],
    queryFn: getEmojis,
  });
  const addEmojiCount = useEmojiStore((state) => state.addEmojiCount);
  const emojiCount = useEmojiStore((state) => state.emojiCount);

  return (
    <div className="p-2  ">
      <div className="flex flex-wrap gap-5">
        {data?.map((emoji) => (
          <div className="flex flex-wrap gap-2">
            <div
              className="hover:cursor-pointer"
              key={emoji?.code}
              onClick={() => addEmojiCount(emoji?.name)}
            >
              {decodeHtmlEntity(emoji?.code)}
            </div>
            <span>{emojiCount[emoji?.name] || 0}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiList;
