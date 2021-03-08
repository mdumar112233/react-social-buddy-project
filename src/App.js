import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import NotMatch from './components/NotMatch/NotMatch';
import Header from './components/Header/Header';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/about'>
            <About></About>
        </Route>
        <Route path='/post/:id'>
          <PostDetail></PostDetail>
        </Route>
        <Route path='*'>
          <NotMatch></NotMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
