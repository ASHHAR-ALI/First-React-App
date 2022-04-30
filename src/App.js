import './App.css';
import Navbar from "./MyComponents/Navbar";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
  return (
    <>
  <Navbar title="Header" searchBar={false} />
  <Todos/>
  <Footer/>
    </>);
}

export default App;
