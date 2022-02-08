export const extractEmail = (text) => {
  return text
    .replace(/<\w\>?/g, ",")
    .match(/([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}/g);
};
