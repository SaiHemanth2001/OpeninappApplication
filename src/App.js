import './App.css';
import ComponentWithDualBackground from './components/SignIn';
import Upload from './components/Upload';
import Uploaded from './components/Uploaded';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' Component={ComponentWithDualBackground}></Route>
        <Route exact path='/upload' Component={Upload}></Route>
        <Route exact path='/uploaded' Component={Uploaded}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
