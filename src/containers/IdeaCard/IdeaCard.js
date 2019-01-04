import React from 'react';
import { connect } from 'react-redux';

const IdeaCard = (props) => {
  const { ideaTitle, ideaBody } = props.idea;

  return(
    <div>
      <h1>{ideaTitle}</h1>
      <p>{ideaBody}</p>
      <button>Remove</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(null, mapDispatchToProps)(IdeaCard)