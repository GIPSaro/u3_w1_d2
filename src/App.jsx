import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from './components/AllTheBooks'
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./books/fantasy.json";

function App() {
  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        {/* <AllTheBooks /> */}
        <BookList books={fantasy} />
      </Container>
      <MyFooter />
    </>
  );
}

export default App;
