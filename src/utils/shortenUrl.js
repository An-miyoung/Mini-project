export const shortenUrl = (url) => {
  const splitUrl = url.split("/")[2];
  if (splitUrl.includes("www")) {
    return splitUrl.slice(4);
  } else {
    return splitUrl;
  }
};
