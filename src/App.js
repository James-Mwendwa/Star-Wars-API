import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Films from "./Films";
import Cast from "./Cast";
import Planets from "./Planets";
import Species from "./Species";
import Starship from "./Starship";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/films" component={Films} />
          <Route path="/cast" component={Cast} />
          <Route path="/planets" component={Planets} />
          <Route path="/species" component={Species} />
          <Route path="/starship" component={Starship} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
