import React from 'react';
import PropTypes from 'prop-types';


function Counter(props){

  function buttonUpPress(){
    return {
      props: props
    }
  };

    return(
      <div>
        <p>{props.title}</p>
        <h4>{props.number}</h4>
        <button onClick={buttonUpPress}>Up</button>

      </div>
    );

}

Counter.PropTypes = {
  number: PropTypes.number
}

export default Counter;
