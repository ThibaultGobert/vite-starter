import type { Emoji } from "@/types/emoji/emoji-type";
import axiosInstance from "../base-api";

export const getEmojis = (): Promise<Emoji[]> => {
  return axiosInstance.get("").then((response) => {
    // Return data from api: response.data, used hardcoded mock data for now.
    return [
      { name: "SMILE", code: "&#128512;" },
      { name: "BIG_SMILE", code: "&#128513;" },
      { name: "CRYING_LAUGHTER", code: "&#128514;" },
      { name: "SMILE_ROUND_EYES", code: "&#128515;" },
      { name: "SMILE_CURLY_EYES", code: "&#128516;" },
    ];
  });
};
