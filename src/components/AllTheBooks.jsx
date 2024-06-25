import { Component } from "react";
import Badge from "react-bootstrap/Badge";
import { Card, Container, Row, Col } from "react-bootstrap";
import Books from "../books/scifi.json";

class AllTheBooks extends Component {
  state = {};
  render() {
    return (
      <Container fluid="md">
        <h1 className="my-4">LIBRERIA</h1>
        <Row>
          {Books.map((book) => {
            return (
              <Col lg={3} md={6} sm={12} key={book.asin} className="mb-4">
                <Card className="card h-100">
                  <Card.Img
                    variant="top"
                    src={book.img}
                    className="h-75 card-img-top"
                  />
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
