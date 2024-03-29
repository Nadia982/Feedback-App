import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Card from './components/shared/Card';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import {FeedbackProvider} from './context/FeedbackContext';

function App() {

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm/>
                {/* since feedback is our state, whenever that state changes, it'll automatically change within the feedback stats component. */}
                <FeedbackStats />
                <FeedbackList
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Card>
          <NavLink to="/" activeClassName="active" className="bottom-menu">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active" className="bottom-menu">
            About
          </NavLink>
        </Card>
        <AboutIconLink/>
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
