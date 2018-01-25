import React from 'react';
import PropTypes from 'prop-types';


function Counter(props){

  function handleUpVoteButton() {
    props.onCounterUp(props.title);
  }

    return(
      <div>
        <p>{props.title}</p>
        <h4>{props.number}</h4>
        <button onClick={handleUpVoteButton}>Up</button>

      </div>
    );

}

Counter.PropTypes = {
  number: PropTypes.number
}

export default Counter;
