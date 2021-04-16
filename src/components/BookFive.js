const BookFive = () => {
  return (
    <div className="book_five">
      <div className="book_info">
        <p className="title">
          Styled with: <span>styled-jsx</span>{" "}
        </p>
        <p className="icon">
          <i class="fab fa-react"></i>
        </p>{" "}
      </div>
      <style jsx>{`
        .book_five {
          color: #fff;
          width: 106px;
          height: 448px;
          margin-right: 23px;
          background-color: rebeccapurple;
        }
      `}</style>
    </div>
  );
};
export default BookFive;
