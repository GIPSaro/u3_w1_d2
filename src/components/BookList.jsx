import { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import "../AllTheBooks.css";

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const changeSelectedBook = (asin) => {
    setSelectedBook(asin);
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col md={6} lg={4} xl={3}>
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            {books
              .filter((b) =>
                b.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((b) => (
                <Col xs={12} md={4} lg={3} key={b.asin}>
                  <SingleBook
                    book={b}
                    selectedBook={selectedBook}
                    changeSelectedBook={changeSelectedBook}
                  />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BookList;
