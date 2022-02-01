import { useEffect } from "react";
import PostList from "../components/PostList";
import { getStoriesPage } from "../hooks/useGetPost";
import { TOP_PAGE_HEIGHT } from "../constants";

export default function HomePage() {
  const type = "top";
  const clientYs = [];
  const pageMove = [];

  useEffect(() => {
    const topPage = document.getElementById("topPage");
    const topPageTouchStart = function (event) {
      clientYs.splice(0);
      clientYs.push(event.touches[0].clientY);
    };
    const topPageTouchMove = function (event) {
      clientYs.push(event.touches[0].clientY);
    };
    const topPageTouchEnd = function (event) {
      if (clientYs[0] > clientYs[clientYs.length - 1]) {
        pageMove.push(clientYs[0] - clientYs[clientYs.length - 1]);
        const lastMove = pageMove.reduce((r, l) => r + l, 0);
        if (lastMove >= TOP_PAGE_HEIGHT) {
          getStoriesPage(type);
          pageMove.splice(0);
        }
        console.log("업 슬라이딩: ", lastMove);
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
