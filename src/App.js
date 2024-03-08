import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import Card from './components/shared/Card';
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                {/* since feedback is our state, whenever that state changes, it'll automatically change within the feedback stats component. */}
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
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
  );
}

export default App;
