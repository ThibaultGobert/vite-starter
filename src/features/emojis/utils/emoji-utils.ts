// If used outside of this feature, move to general utils folder
export const decodeHtmlEntity = (str: string) => {
  const el = document.createElement("div");
  el.innerHTML = str;
  return el.textContent;
};
