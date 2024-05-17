import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import NewBlog from './NewBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// switch is like router-view in vue
function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar />

        <div className="content-div">
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <NewBlog />
            </Route>

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path='*'>
              <NotFound />
            </Route>

          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
