import { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import "../AllTheBooks.css";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container className="mt-5">
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((book, index) => (
              <Col xs={6} md={4} lg={3} key={`book-${index}`}>
                <SingleBook
                  img={book.img}
                  title={book.title}
                  price={book.price}
                  category={book.category}
                />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
