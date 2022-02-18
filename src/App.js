import './sass/App.scss';
import Nav from './components/Nav';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import User from './pages/User';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage />}>
          </Route>
          <Route path="/signin" element={<SignIn />}>
          </Route>
          <Route path="/user" element={<User />}>
          </Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
