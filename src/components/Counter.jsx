import React from 'react';
import PropTypes from 'prop-types';


function Counter(props){

  function handleUpVoteButton() {
    props.onCounterUp(props.title);
  }

  function handleDownVoteButton() {
    props.onCounterDown(props.title);
  }

  let styles = {
    container: {
      width: '100px',
      padding: '10px',
      border: '1px solid #DDD',
      marginBottom: '10px',
      fontFamily: 'sans-serif',
      fontWeight: '200'
    },

  }


  return(
    <div style={styles.container}>
      <p>{props.title}</p>
      <button onClick={handleUpVoteButton}>Up</button><br/>
        <p>{props.number}</p>
      <button onClick={handleDownVoteButton}>Down</button>
    </div>
  );

}



Counter.PropTypes = {
  number: PropTypes.number
}

export default Counter;
