export const extractUrl = (text) => {
  return text.replace(/&#x2F;/g, "/").match(/https?:\/\/[\w\-\.]+/g);
};
