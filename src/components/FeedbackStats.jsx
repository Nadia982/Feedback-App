import PropTypes from 'prop-types'

const FeedbackStats = ({feedback}) => {
    //calculate average
    let average = feedback.reduce((acc, cur)=>{
        return acc + cur.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/,"")}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats