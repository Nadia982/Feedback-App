import { v4 as uuidv4 } from "uuid";
import {createContext, useState } from 'react';
const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
const [feedback, setFeedback] = useState([
    {id: 1, 
    text: "This is feedback item 1",
    rating: 10
}, 
{id: 2, 
    text: "This is feedback item 2",
    rating: 9
}, 
{id: 3, 
    text: "This is feedback item 3",
    rating: 7
}, 

]);
const [feedbackEdit, setFeedbackEdit] = useState({
  item: {},
  edit: false,
})

//Add feedback
const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

//Delete feedback
const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

//update feedback item 
const updateFeedback = (id, updItem) => {
  setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item));
};


//Set item to be updated 
const editFeedback = (item) => {
setFeedbackEdit({
  item,
  edit: true,
})
}

return <FeedbackContext.Provider value={{
    feedback,
    // feedbackEdit is the piece of state that holds the feedback item and the boolean ('edit: true' or 'edit: false')).
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    // editFeedback is the function that runs when we click the edit button 
    editFeedback, 
    updateFeedback
}}>
    {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext;