import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from '../components/shared/Card'

function FeedbackItem({item, handleDelete}) {
 //the data is now coming in as a prop, so we don't need useState


 return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>handleDelete(item.id)} className="close"><FaTimes color="purple"/></button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,

}

export default FeedbackItem;
