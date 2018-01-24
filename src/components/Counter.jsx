import React from 'react';
import PropTypes from 'prop-types';


function Counter(props){
  // console.log(props);

  return(
    <div>
      <p>{props.title}</p>
      <h4>{props.number}</h4>
      <button onClick={props.onCounterUp}>Up</button>
      <button onClick={props.onCounterDown}>Down</button>
    </div>
  );
}

Counter.PropTypes = {
  number: PropTypes.number,
  onCounterUp: PropTypes.func,
  onCounterDown: PropTypes.func
}

export default Counter;
