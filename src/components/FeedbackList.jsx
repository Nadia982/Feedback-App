import { motion, AnimatePresence } from "framer-motion";
import {useContext} from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const {feedback} = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          //motion div has to have a unique key because it is a list.
          <motion.div 
            key={item.id}
            initial={{opacity: 0}}
            transition={{ duration: 1}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}>
            <FeedbackItem
              key={item.id}
              item={item}
             />
            {/* handleDelete is now a prop for FeedbackItem, and this needs to be caught in FeedbackItem */}
          </motion.div>
        ))}
      </AnimatePresence>
      {/* (id) =>{console.log(id)} */}
    </div>
  );

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
  //       //handleDelete is now a prop for FeedbackItem, and this needs to be caught in FeedbackItem
  //     ))}
  //     {/* (id) =>{console.log(id)} */}
  //   </div>
  // );
};

export default FeedbackList;
