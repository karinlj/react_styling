import StyledBookSix from "../styles/styled-components/StyledBookSix";

const BookSix = () => {
  return (
    //kan sätta klassen här för att få ett klassnamn oxo
    <StyledBookSix className="book_six">
      <div className="book_info">
        <p className="title">Styled with styled-components</p>
        <p className="author">chimamanda ngozi adichie</p>
      </div>
    </StyledBookSix>
  );
};
export default BookSix;
