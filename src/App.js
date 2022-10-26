import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Course from "./components/Course";
import Allcources from "./components/Allcources";
import Addcourse from "./components/Addcourse";

function App(props) {
  return (
    <div className="App">
      <Allcources />
      <Addcourse />
    </div>
  );
}

export default App;
