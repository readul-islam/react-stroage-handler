import "./App.css";
import Allproducts from "./components/Allproducts/Allproducts";
import "bootstrap/dist/css/bootstrap.min.css";
import Displaycart from "./components/Displaycart/Displaycart";


function App() {
  return (
    <div className="App">
     <Displaycart></Displaycart>
      <Allproducts></Allproducts>
    </div>
  );
}

export default App;
