
import './App.css';
import Companieslistcomponent from './components/Companieslistcomponent';
import Menucomponent from './components/Menucomponent';
import Watchlistcomponent from './components/Watchlistcomponent'
import Performancecomponent from './components/Performancecomponent';
import {BrowserRouter as Router, Route,Link} from "react-router-dom"
import LoginComponent from './components/LoginComponent';
function App() {
  return (
    <div className="App">
      <Router>     
     <Menucomponent />
     <Route path="/companies-list" component={Companieslistcomponent}/>
     <Route path="/watchlist" component={Watchlistcomponent}/>
     <Route path="/performance" component={Performancecomponent}/>
     <Route path="/login" component={LoginComponent}/>
      {/* <Companieslistcomponent/>
      <Performancecomponent/> */}
      </Router>

    </div>
  );
}

export default App;
