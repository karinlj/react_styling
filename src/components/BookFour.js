import BookFourStyles from "../styles/css-modules/BookFour.module.css";

const BookFour = () => {
  return (
    //kan sätta klassen här för att få ett klassnamn oxo
    <div className={BookFourStyles["book_four"]}>
      <div className="book_info">
        <p className="title">
          Styled with: <span>css-modules</span>
        </p>
        <p className="icon">
          <i class="fab fa-react"></i>
        </p>{" "}
      </div>
    </div>
  );
};
export default BookFour;
