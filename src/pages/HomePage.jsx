import { useEffect } from "react";
import PostList from "../components/PostList";

export default function HomePage() {
  const type = "top";
  const clientYs = [];
  useEffect(() => {
    const topPage = document.getElementById("topPage");
    const topPageTouchStart = function (event) {
      console.log("touchstart", event);
      clientYs.splice(0);
      clientYs.push(event.touches[0].clientY);
    };
    const topPageTouchMove = function (event) {
      console.log("touchmove", event);
      clientYs.push(event.touches[0].clientY);
    };
    const topPageTouchEnd = function (event) {
      console.log("topPageTouchEnd", event);
      if (clientYs[0] > clientYs[clientYs.length - 1]) {
        console.log("업 슬라이딩");
      }
    };
    topPage.addEventListener("touchstart", topPageTouchStart);
    topPage.addEventListener("touchmove", topPageTouchMove);
    topPage.addEventListener("touchend", topPageTouchEnd);
    return function () {
      console.log("터치 종료");
      topPage.removeEventListener("touchstart", topPageTouchStart);
      topPage.removeEventListener("touchendmove", topPageTouchMove);
      topPage.removeEventListener("touchend", topPageTouchEnd);
    };
  }, []);
  return (
    <div id="topPage">
      <PostList type={type} />
    </div>
  );
}
