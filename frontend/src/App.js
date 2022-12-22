import "./App.css";
import Info from "./components/info/Info";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Info />
    </div>
  );
}

export default App;
