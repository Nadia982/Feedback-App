import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if(e.target.value === ''){
        setBtnDisabled(true);
        // message should only show if we have typed something and our text is less than 10 characters long.
        setMessage(null);
    } else if (e.target.value !== '' && e.target.value.trim().length <= 10){
        setMessage("Please type more than 10 characters");
        setBtnDisabled(true);
    } else {
        setMessage(null);
        setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your experience with us?</h2>
        {/* todo - rating select component */}
        <div className="input-group">
          <input
        //   className="about-link"
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled} version='secondary'>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
