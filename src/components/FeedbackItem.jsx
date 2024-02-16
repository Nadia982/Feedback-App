function FeedbackItem({item}) {
 //the data is now coming in as a prop, so we don't need useState
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  );
}

export default FeedbackItem;
