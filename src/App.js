import "./assets/styles/App.css";
import { ControlPanel, Footer, Header,GamePanel} from "./components";

function App() {
  return (
    <div id="container">
      <Header></Header>
      <main className="main-content">
        <ControlPanel></ControlPanel>
        <GamePanel></GamePanel>
      </main>
    <Footer></Footer>
    </div>
  );
}

export default App;
// Esta linha também poderia ser eliminada
// e adefinição da funsão ser substituida
// export default function App() {
