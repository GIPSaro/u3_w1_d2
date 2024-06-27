import { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import "../AllTheBooks.css";

const SingleBook = (props) => {
  const [selectedBook, setSelectedBook] = useState("");

  const changeSelectedBookHandler = () => {
    setSelectedBook(props.book.asin);
    props.changeSelectedBook(props.book.asin);
  };
  //qua sopra diamo a selectedBook un nuovo asin ogni volta che cliccheremo un nuovo book

  return (
    <>
      <Card
        className="book-card border-1  shadow-lg h-100 p-1 "
        onClick={changeSelectedBookHandler}
        //se la card ha lo stesso asin del selectedBook allora si colora rosso , sennò grigio
        style={{
          border:
            props.selectedBook === props.book.asin
              ? "3px solid red"
              : "3px solid #ebebeb",
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
          <div className="mt-auto d-flex justify-content-between">
            <Button variant="success" className="me-1">
              Buy
            </Button>
            <Badge bg="dark" className="d-flex align-items-center">
              {props.price}$
            </Badge>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
