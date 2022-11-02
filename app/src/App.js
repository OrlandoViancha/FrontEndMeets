import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import { ActProvider } from "./context/act-context";
import Routes from "./routes/routes";

function App() {
  return (
    <ActProvider>
      <div className="App">
        <div className="App-header">
          <Sidebar></Sidebar>
        </div>
        <section className="App-body">
          <Routes />
        </section>
      </div>
    </ActProvider>
  );
}

export default App;
