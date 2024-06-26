import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import BookList from "./components/BookList";

import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import "./App.scss";
import MyFooter from "./components/MyFooter";
// import SingleBook from "./components/SingleBook";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList />
      {/* <SingleBook /> */}
      <MyFooter />
    </>
  );
}

export default App;
