import StyledBookThree from "../styles/styled-components/StyledBookThree";

export default function BookThree() {
  return (
    //kan sätta klassen här för att få ett klassnamn oxo
    <StyledBookThree className="book_three">
      <div className="book_info">
        <p className="title">
          Styled with: <span>styled-components</span>
        </p>
        <p className="icon">
          <i class="fab fa-react"></i>
        </p>{" "}
      </div>
    </StyledBookThree>
  );
}
