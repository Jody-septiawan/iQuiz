import { Switch, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Landing from "./pages/Landing";
import BuySuperUser from "./pages/BuySuperUser";

function App() {
  AOS.init({ duration: 2000 });

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/buy-super-user" component={BuySuperUser} />
    </Switch>
  );
}

export default App;
