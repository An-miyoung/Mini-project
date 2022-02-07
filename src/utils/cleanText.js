export const cleanText = (text) => {
  return text
    .replace(/<\w+\>+/g, "")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, "/")
    .replace(/&quot;/g, "''")
    .replace(/&amp;/g, "&");
};
