import './App.css';
import Navbar from "./MyComponents/Navbar";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      Srno : 1,
      title : "Go to the market",
      description : "You need to go to the market in time"
    },
    {
      Srno : 2,
      title : "Go to the market",
      description : "You need to go to the Mall in time"
    },
    {
      Srno : 3,
      title : "Go to the market",
      description : "You need to go to the Mandi in time"
    },
  ]
  return (
    <>
  <Navbar title="Header" searchBar={false} />
  <Todos todos={todos} />
  <Footer/>
    </>);
}

export default App;
