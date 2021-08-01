import { Switch, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Landing from "./pages/Landing";
import BuySuperUser from "./pages/BuySuperUser";
import SuperUser from "./pages/SuperUser";
import Profile from "./pages/Profile";

function App() {
  AOS.init({ duration: 2000 });

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/super-users" component={BuySuperUser} />
      <Route path="/super-user/:id" component={SuperUser} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}

export default App;