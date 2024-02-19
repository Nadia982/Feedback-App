import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from '../components/shared/Card'

function FeedbackItem({item}) {
 //the data is now coming in as a prop, so we don't need useState
  const handleClick = (id)=>{
    console.log(id)
  } 
 return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={()=>handleClick(item.id)} className="close"><FaTimes color="purple"/></button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,

}

export default FeedbackItem;
