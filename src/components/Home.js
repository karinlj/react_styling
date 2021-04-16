import BookFive from "./BookFive";
import BookFour from "./BookFour";
import BookOne from "./BookOne";
import BookSix from "./BookSix";
import BookThree from "./BookThree";
import BookTwo from "./BookTwo";
import "../styles/scss/_home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="the_bookshelf">
        <div className="bookshelf_wrap">
          <div className="bookshelf">
            <BookOne />
            <BookTwo />
            <BookThree />
            <BookFour />
            <BookFive />
            <BookSix />
          </div>
        </div>
      </div>
    </div>
  );
}
