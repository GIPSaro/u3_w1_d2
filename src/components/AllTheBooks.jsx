import { Component } from "react";
import Badge from "react-bootstrap/Badge";
import { Card, Container, Row, Col } from "react-bootstrap";
import Books from "../books/scifi.json";

class AllTheBooks extends Component {
  state = {};
  render() {
    return (
      <Container className="fluid">
        <Row>
          {Books.map((book) => {
            return (
              <Col xs={12} md={3} key={book.asin}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Badge bg="info">{book.price}$</Badge>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
