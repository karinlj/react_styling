import StyledBookThree from "../styles/styled-components/StyledBookThree";

export default function BookThree() {
  return (
    //kan sätta klassen här för att få ett klassnamn oxo
    <StyledBookThree className="book_three">
      <div className="book_info">
        <p className="title">Styled with styled-components</p>
        <p className="author">Martin Gurri</p>
      </div>
    </StyledBookThree>
  );
}
