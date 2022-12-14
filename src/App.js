// import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
// import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
    // const [feedback, setFeedback] = useState(FeedbackData)

    // const deleteFeedback = (id) => {
    //   if(window.confirm('Are you sure you want to delete?')) {
    //     setFeedback(feedback.filter((item) => item.id !== id))
    //   } 
    // }

    // const addFeedback = (newFeedback) => {
    //   newFeedback.id = uuidv4()
    //   setFeedback([newFeedback, ...feedback])
    // }
    return (
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path='/' element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }>

              </Route>
              <Route path='/about' element={<AboutPage />} />
            </Routes>
            <AboutIconLink />
          </div>
        </Router>
     </FeedbackProvider>
    )
}

export default App;