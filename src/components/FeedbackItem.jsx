import {FaTimes} from 'react-icons/fa'
import {useContext} from 'react'
import PropTypes from 'prop-types'
import Card from '../components/shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
  const {deleteFeedback} = useContext(FeedbackContext) 
 //the data is now coming in as a prop, so we don't need useState

 return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>deleteFeedback(item.id)} className="close"><FaTimes color="purple"/></button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,

}

export default FeedbackItem;
