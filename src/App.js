import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={'Hola bienvenido'}/>
    </div>
  );
}

export default App;
