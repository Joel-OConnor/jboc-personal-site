import React from 'react';
import { connect } from 'react-redux';
import IdeaCard from '../IdeaCard/IdeaCard';

const IdeaContainer = (props) => {
  const displayIdeas = props.ideas.map(idea => <IdeaCard idea={ idea }/> )
  
  return (
    <div>
      {displayIdeas}
    </div>
  )
}

const mapStateToProps = (state) => ({
  ideas: state.ideas
})

export default connect(mapStateToProps)(IdeaContainer);