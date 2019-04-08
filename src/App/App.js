import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../Home";
import CharacterList from "../CharacterList";
import Character from "../Character";
import LocationList from "../LocationList";
import Location from "../Location";
import EpisodeList from "../EpisodeList";
import Episode from "../Episode";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/character/">Characters</Link>
            </li>
            <li>
              <Link to="/location/">Locations</Link>
            </li>
            <li>
              <Link to="/episode/">Episodes</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/character/" exact component={CharacterList} />
        <Route path="/character/:id" exact component={Character} />
        <Route path="/location/" exact component={LocationList} />
        <Route path="/location/:id" exact component={Location} />
        <Route path="/episode/" exact component={EpisodeList} />
        <Route path="/episode/:id" exact component={Episode} />
      </div>
    </Router>
  );
}

export default App;
