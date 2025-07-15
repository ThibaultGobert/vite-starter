import { EmojiCategory } from "@/types/emoji/emoji-type";
import { create } from "zustand";

type State = {
  emojiCount: { [key in EmojiCategory]: number };
};

type emojiState = {
  emojiCount: { [key in EmojiCategory]: number };
  addEmojiCount: (emojiName: EmojiCategory) => void;
  resetEmojiCount: () => void;
};

const useEmojiStore = create<emojiState>((set) => ({
  emojiCount: {
    [EmojiCategory.SMILE]: 0,
    [EmojiCategory.BIG_SMILE]: 0,
    [EmojiCategory.CRYING_LAUGHTER]: 0,
    [EmojiCategory.SMILE_ROUND_EYES]: 0,
    [EmojiCategory.SMILE_CURLY_EYES]: 0,
  },
  addEmojiCount: (emojiName: EmojiCategory) =>
    set((state: State) => ({
      emojiCount: {
        ...state.emojiCount,
        [emojiName]: (state.emojiCount[emojiName] || 0) + 1,
      },
    })),
  resetEmojiCount: () =>
    set(() => ({
      emojiCount: {
        [EmojiCategory.SMILE]: 0,
        [EmojiCategory.BIG_SMILE]: 0,
        [EmojiCategory.CRYING_LAUGHTER]: 0,
        [EmojiCategory.SMILE_ROUND_EYES]: 0,
        [EmojiCategory.SMILE_CURLY_EYES]: 0,
      },
    })),
}));

export default useEmojiStore;
