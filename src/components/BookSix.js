import StyledBookSix from "../styles/styled-components/StyledBookSix";

const BookSix = () => {
  return (
    //kan sätta klassen här för att få ett klassnamn oxo
    <StyledBookSix className="book_six">
      <div className="book_info">
        <p className="title">
          Styled with: <span>styled-components</span>
        </p>
        <p className="icon">
          <i class="fab fa-react"></i>
        </p>{" "}
      </div>
    </StyledBookSix>
  );
};
export default BookSix;
