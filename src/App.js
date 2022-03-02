import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Registration from './Registration';
import LoginPage from './LoginPage';
import Members from './Members';
function App() {
  return (
    <div className="App">
        <BrowserRouter>   
        <a href="/login"><button type="button" className="btn mb-2 mb-md-0 w-50 btn-primary btn-block btn-round">Login
        </button></a> <br /> <br />
        <a href="/register"><button type="button" className="btn mb-2 mb-md-0 w-50 btn-primary btn-block btn-round">Register
        </button></a>
        <a href="/member"><button type="button" className="btn mb-2 mb-md-0 w-50 btn-primary btn-block btn-round">Members
        </button></a>
        
          <Routes>
            <Route path="/register" element={<Registration />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/member" element={<Members />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
