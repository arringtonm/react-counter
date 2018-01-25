import React from 'react';
import Counter from './Counter';

function CounterList(props) {
  console.log(props);
  return(
    <div>
      {props.counterArray.map((counter, index) =>
        <Counter
          title={counter.title}
          number={counter.number}
          key={index}
           />
      )}
    </div>
  );
}

export default CounterList;
