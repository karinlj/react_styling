import BookFourStyles from "../styles/css-modules/BookFour.module.css";

const BookFour = () => {
  return (
    //kan sätta klassen här för att få ett klassnamn oxo
    <div className={BookFourStyles["book_four"]}>
      <div className="book_info">
        <p className="title">Styled with css-modules</p>
        <p className="author">wole soyinka</p>
      </div>
    </div>
  );
};
export default BookFour;
