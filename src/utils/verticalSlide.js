export const verticalSlide = (clicked, pageID) => {
  const page = document.getElementById(pageID);
  console.log(pageID);
  if (clicked) {
    page.style.top = "442px";
    page.style.height = "364px";
  } else {
    page.style.top = "147px";
    page.style.height = "659px";
  }
  return !clicked;
};
