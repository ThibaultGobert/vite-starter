export type Emoji = {
  name: EmojiCategory;
  code: string;
};

export const EmojiCategory = {
  SMILE: "SMILE",
  BIG_SMILE: "BIG_SMILE",
  CRYING_LAUGHTER: "CRYING_LAUGHTER",
  SMILE_ROUND_EYES: "SMILE_ROUND_EYES",
  SMILE_CURLY_EYES: "SMILE_CURLY_EYES",
} as const;

export type EmojiCategory = keyof typeof EmojiCategory;
