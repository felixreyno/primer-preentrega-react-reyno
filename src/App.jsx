import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido/a a MiTienda! 🎉" />
    </div>
  );
}

export default App;
