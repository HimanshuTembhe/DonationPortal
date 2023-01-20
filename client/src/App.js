import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/projects-page/projects';
import Projectdetail from './Pages/projectdetailspage/projectdetail';
import MyProfile from './Pages/profile/myProfile';
import Gsproject_putiing from './Pages/gsdashboard/Gsproject_putiing';
function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <Navbar/>
        </header> */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/projects.js">
              <Projects/>
            </Route>
            <Route exact path="/myprofile.js">
              <MyProfile />
            </Route>
            <Route exact path="/projectdetail.js">
              <Projectdetail/>
            </Route>
            <Route exact path="/abcd">
              <Gsproject_putiing/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
