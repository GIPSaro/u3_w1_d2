import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import BookList from "./components/BookList";

import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import "./App.scss";
import MyFooter from "./components/MyFooter";
import fantasy from "./books/fantasy.json";

// import SingleBook from "./components/SingleBook";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList books={fantasy} />
      {/* <SingleBook /> */}
      <MyFooter />
    </>
  );
}

export default App;
