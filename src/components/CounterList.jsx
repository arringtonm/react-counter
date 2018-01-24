import React from 'react';
import Counter from './Counter';

function CounterList(props) {
  // console.log(props);
  console.log(props.onCounterUp);
  return(
    <div>
      {props.counterArray.map((counter, index) =>
        <Counter
          title={counter.title}
          number={counter.number}
          onCounterUp={counter.onHandleCountUp}
          onCounterDown={counter.onHandleCountDown}
          key={index}/>
      )}
    </div>
  );
}

export default CounterList;
